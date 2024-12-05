# `dataOciLicenseManagerProductLicenseConsumers` Submodule <a name="`dataOciLicenseManagerProductLicenseConsumers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLicenseManagerProductLicenseConsumers <a name="DataOciLicenseManagerProductLicenseConsumers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers oci_license_manager_product_license_consumers}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer"></a>

```typescript
import { dataOciLicenseManagerProductLicenseConsumers } from 'rhizo-co-terraform-provider-oci'

new dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers(scope: Construct, id: string, config: DataOciLicenseManagerProductLicenseConsumersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig">DataOciLicenseManagerProductLicenseConsumersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig">DataOciLicenseManagerProductLicenseConsumersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.resetIsCompartmentIdInSubtree">resetIsCompartmentIdInSubtree</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsCompartmentIdInSubtree` <a name="resetIsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.resetIsCompartmentIdInSubtree"></a>

```typescript
public resetIsCompartmentIdInSubtree(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLicenseManagerProductLicenseConsumers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isConstruct"></a>

```typescript
import { dataOciLicenseManagerProductLicenseConsumers } from 'rhizo-co-terraform-provider-oci'

dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isTerraformElement"></a>

```typescript
import { dataOciLicenseManagerProductLicenseConsumers } from 'rhizo-co-terraform-provider-oci'

dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isTerraformDataSource"></a>

```typescript
import { dataOciLicenseManagerProductLicenseConsumers } from 'rhizo-co-terraform-provider-oci'

dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.generateConfigForImport"></a>

```typescript
import { dataOciLicenseManagerProductLicenseConsumers } from 'rhizo-co-terraform-provider-oci'

dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLicenseManagerProductLicenseConsumers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLicenseManagerProductLicenseConsumers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLicenseManagerProductLicenseConsumers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLicenseManagerProductLicenseConsumers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList">DataOciLicenseManagerProductLicenseConsumersItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.isCompartmentIdInSubtreeInput">isCompartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.productLicenseIdInput">productLicenseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.isCompartmentIdInSubtree">isCompartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.productLicenseId">productLicenseId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.items"></a>

```typescript
public readonly items: DataOciLicenseManagerProductLicenseConsumersItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList">DataOciLicenseManagerProductLicenseConsumersItemsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isCompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="isCompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.isCompartmentIdInSubtreeInput"></a>

```typescript
public readonly isCompartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `productLicenseIdInput`<sup>Optional</sup> <a name="productLicenseIdInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.productLicenseIdInput"></a>

```typescript
public readonly productLicenseIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isCompartmentIdInSubtree`<sup>Required</sup> <a name="isCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.isCompartmentIdInSubtree"></a>

```typescript
public readonly isCompartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `productLicenseId`<sup>Required</sup> <a name="productLicenseId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.productLicenseId"></a>

```typescript
public readonly productLicenseId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLicenseManagerProductLicenseConsumersConfig <a name="DataOciLicenseManagerProductLicenseConsumersConfig" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.Initializer"></a>

```typescript
import { dataOciLicenseManagerProductLicenseConsumers } from 'rhizo-co-terraform-provider-oci'

const dataOciLicenseManagerProductLicenseConsumersConfig: dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#compartment_id DataOciLicenseManagerProductLicenseConsumers#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.productLicenseId">productLicenseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#product_license_id DataOciLicenseManagerProductLicenseConsumers#product_license_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#id DataOciLicenseManagerProductLicenseConsumers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.isCompartmentIdInSubtree">isCompartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#is_compartment_id_in_subtree DataOciLicenseManagerProductLicenseConsumers#is_compartment_id_in_subtree}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#compartment_id DataOciLicenseManagerProductLicenseConsumers#compartment_id}.

---

##### `productLicenseId`<sup>Required</sup> <a name="productLicenseId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.productLicenseId"></a>

```typescript
public readonly productLicenseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#product_license_id DataOciLicenseManagerProductLicenseConsumers#product_license_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#id DataOciLicenseManagerProductLicenseConsumers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isCompartmentIdInSubtree`<sup>Optional</sup> <a name="isCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.isCompartmentIdInSubtree"></a>

```typescript
public readonly isCompartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#is_compartment_id_in_subtree DataOciLicenseManagerProductLicenseConsumers#is_compartment_id_in_subtree}.

---

### DataOciLicenseManagerProductLicenseConsumersItems <a name="DataOciLicenseManagerProductLicenseConsumersItems" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItems.Initializer"></a>

```typescript
import { dataOciLicenseManagerProductLicenseConsumers } from 'rhizo-co-terraform-provider-oci'

const dataOciLicenseManagerProductLicenseConsumersItems: dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItems = { ... }
```


### DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts <a name="DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts.Initializer"></a>

```typescript
import { dataOciLicenseManagerProductLicenseConsumers } from 'rhizo-co-terraform-provider-oci'

const dataOciLicenseManagerProductLicenseConsumersItemsMissingProducts: dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLicenseManagerProductLicenseConsumersItemsList <a name="DataOciLicenseManagerProductLicenseConsumersItemsList" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer"></a>

```typescript
import { dataOciLicenseManagerProductLicenseConsumers } from 'rhizo-co-terraform-provider-oci'

new dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.get"></a>

```typescript
public get(index: number): DataOciLicenseManagerProductLicenseConsumersItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList <a name="DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer"></a>

```typescript
import { dataOciLicenseManagerProductLicenseConsumers } from 'rhizo-co-terraform-provider-oci'

new dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.get"></a>

```typescript
public get(index: number): DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference <a name="DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer"></a>

```typescript
import { dataOciLicenseManagerProductLicenseConsumers } from 'rhizo-co-terraform-provider-oci'

new dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts">DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts">DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts</a>

---


### DataOciLicenseManagerProductLicenseConsumersItemsOutputReference <a name="DataOciLicenseManagerProductLicenseConsumersItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer"></a>

```typescript
import { dataOciLicenseManagerProductLicenseConsumers } from 'rhizo-co-terraform-provider-oci'

new dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.areAllOptionsAvailable">areAllOptionsAvailable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.isBaseLicenseAvailable">isBaseLicenseAvailable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.licenseUnitsConsumed">licenseUnitsConsumed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.licenseUnitType">licenseUnitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.missingProducts">missingProducts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList">DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.productName">productName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceCompartmentId">resourceCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceCompartmentName">resourceCompartmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceUnitCount">resourceUnitCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceUnitType">resourceUnitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItems">DataOciLicenseManagerProductLicenseConsumersItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `areAllOptionsAvailable`<sup>Required</sup> <a name="areAllOptionsAvailable" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.areAllOptionsAvailable"></a>

```typescript
public readonly areAllOptionsAvailable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isBaseLicenseAvailable`<sup>Required</sup> <a name="isBaseLicenseAvailable" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.isBaseLicenseAvailable"></a>

```typescript
public readonly isBaseLicenseAvailable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `licenseUnitsConsumed`<sup>Required</sup> <a name="licenseUnitsConsumed" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.licenseUnitsConsumed"></a>

```typescript
public readonly licenseUnitsConsumed: number;
```

- *Type:* number

---

##### `licenseUnitType`<sup>Required</sup> <a name="licenseUnitType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.licenseUnitType"></a>

```typescript
public readonly licenseUnitType: string;
```

- *Type:* string

---

##### `missingProducts`<sup>Required</sup> <a name="missingProducts" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.missingProducts"></a>

```typescript
public readonly missingProducts: DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList">DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList</a>

---

##### `productName`<sup>Required</sup> <a name="productName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.productName"></a>

```typescript
public readonly productName: string;
```

- *Type:* string

---

##### `resourceCompartmentId`<sup>Required</sup> <a name="resourceCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceCompartmentId"></a>

```typescript
public readonly resourceCompartmentId: string;
```

- *Type:* string

---

##### `resourceCompartmentName`<sup>Required</sup> <a name="resourceCompartmentName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceCompartmentName"></a>

```typescript
public readonly resourceCompartmentName: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `resourceUnitCount`<sup>Required</sup> <a name="resourceUnitCount" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceUnitCount"></a>

```typescript
public readonly resourceUnitCount: number;
```

- *Type:* number

---

##### `resourceUnitType`<sup>Required</sup> <a name="resourceUnitType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceUnitType"></a>

```typescript
public readonly resourceUnitType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLicenseManagerProductLicenseConsumersItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItems">DataOciLicenseManagerProductLicenseConsumersItems</a>

---



