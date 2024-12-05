# `dataOciLicenseManagerTopUtilizedProductLicenses` Submodule <a name="`dataOciLicenseManagerTopUtilizedProductLicenses` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLicenseManagerTopUtilizedProductLicenses <a name="DataOciLicenseManagerTopUtilizedProductLicenses" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_product_licenses oci_license_manager_top_utilized_product_licenses}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.Initializer"></a>

```typescript
import { dataOciLicenseManagerTopUtilizedProductLicenses } from 'rhizo-co-terraform-provider-oci'

new dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses(scope: Construct, id: string, config: DataOciLicenseManagerTopUtilizedProductLicensesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig">DataOciLicenseManagerTopUtilizedProductLicensesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig">DataOciLicenseManagerTopUtilizedProductLicensesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.resetIsCompartmentIdInSubtree">resetIsCompartmentIdInSubtree</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsCompartmentIdInSubtree` <a name="resetIsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.resetIsCompartmentIdInSubtree"></a>

```typescript
public resetIsCompartmentIdInSubtree(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLicenseManagerTopUtilizedProductLicenses resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.isConstruct"></a>

```typescript
import { dataOciLicenseManagerTopUtilizedProductLicenses } from 'rhizo-co-terraform-provider-oci'

dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.isTerraformElement"></a>

```typescript
import { dataOciLicenseManagerTopUtilizedProductLicenses } from 'rhizo-co-terraform-provider-oci'

dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.isTerraformDataSource"></a>

```typescript
import { dataOciLicenseManagerTopUtilizedProductLicenses } from 'rhizo-co-terraform-provider-oci'

dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.generateConfigForImport"></a>

```typescript
import { dataOciLicenseManagerTopUtilizedProductLicenses } from 'rhizo-co-terraform-provider-oci'

dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLicenseManagerTopUtilizedProductLicenses resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLicenseManagerTopUtilizedProductLicenses to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLicenseManagerTopUtilizedProductLicenses that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_product_licenses#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLicenseManagerTopUtilizedProductLicenses to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList">DataOciLicenseManagerTopUtilizedProductLicensesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.isCompartmentIdInSubtreeInput">isCompartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.isCompartmentIdInSubtree">isCompartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.items"></a>

```typescript
public readonly items: DataOciLicenseManagerTopUtilizedProductLicensesItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList">DataOciLicenseManagerTopUtilizedProductLicensesItemsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isCompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="isCompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.isCompartmentIdInSubtreeInput"></a>

```typescript
public readonly isCompartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isCompartmentIdInSubtree`<sup>Required</sup> <a name="isCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.isCompartmentIdInSubtree"></a>

```typescript
public readonly isCompartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLicenseManagerTopUtilizedProductLicensesConfig <a name="DataOciLicenseManagerTopUtilizedProductLicensesConfig" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.Initializer"></a>

```typescript
import { dataOciLicenseManagerTopUtilizedProductLicenses } from 'rhizo-co-terraform-provider-oci'

const dataOciLicenseManagerTopUtilizedProductLicensesConfig: dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_product_licenses#compartment_id DataOciLicenseManagerTopUtilizedProductLicenses#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_product_licenses#id DataOciLicenseManagerTopUtilizedProductLicenses#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.isCompartmentIdInSubtree">isCompartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_product_licenses#is_compartment_id_in_subtree DataOciLicenseManagerTopUtilizedProductLicenses#is_compartment_id_in_subtree}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_product_licenses#compartment_id DataOciLicenseManagerTopUtilizedProductLicenses#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_product_licenses#id DataOciLicenseManagerTopUtilizedProductLicenses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isCompartmentIdInSubtree`<sup>Optional</sup> <a name="isCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.isCompartmentIdInSubtree"></a>

```typescript
public readonly isCompartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_product_licenses#is_compartment_id_in_subtree DataOciLicenseManagerTopUtilizedProductLicenses#is_compartment_id_in_subtree}.

---

### DataOciLicenseManagerTopUtilizedProductLicensesItems <a name="DataOciLicenseManagerTopUtilizedProductLicensesItems" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItems.Initializer"></a>

```typescript
import { dataOciLicenseManagerTopUtilizedProductLicenses } from 'rhizo-co-terraform-provider-oci'

const dataOciLicenseManagerTopUtilizedProductLicensesItems: dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLicenseManagerTopUtilizedProductLicensesItemsList <a name="DataOciLicenseManagerTopUtilizedProductLicensesItemsList" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.Initializer"></a>

```typescript
import { dataOciLicenseManagerTopUtilizedProductLicenses } from 'rhizo-co-terraform-provider-oci'

new dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.get"></a>

```typescript
public get(index: number): DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference <a name="DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.Initializer"></a>

```typescript
import { dataOciLicenseManagerTopUtilizedProductLicenses } from 'rhizo-co-terraform-provider-oci'

new dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.isUnlimited">isUnlimited</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.productLicenseId">productLicenseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.productType">productType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.totalLicenseUnitCount">totalLicenseUnitCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.totalUnitsConsumed">totalUnitsConsumed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.unitType">unitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItems">DataOciLicenseManagerTopUtilizedProductLicensesItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isUnlimited`<sup>Required</sup> <a name="isUnlimited" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.isUnlimited"></a>

```typescript
public readonly isUnlimited: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `productLicenseId`<sup>Required</sup> <a name="productLicenseId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.productLicenseId"></a>

```typescript
public readonly productLicenseId: string;
```

- *Type:* string

---

##### `productType`<sup>Required</sup> <a name="productType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.productType"></a>

```typescript
public readonly productType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `totalLicenseUnitCount`<sup>Required</sup> <a name="totalLicenseUnitCount" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.totalLicenseUnitCount"></a>

```typescript
public readonly totalLicenseUnitCount: number;
```

- *Type:* number

---

##### `totalUnitsConsumed`<sup>Required</sup> <a name="totalUnitsConsumed" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.totalUnitsConsumed"></a>

```typescript
public readonly totalUnitsConsumed: number;
```

- *Type:* number

---

##### `unitType`<sup>Required</sup> <a name="unitType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.unitType"></a>

```typescript
public readonly unitType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLicenseManagerTopUtilizedProductLicensesItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItems">DataOciLicenseManagerTopUtilizedProductLicensesItems</a>

---



