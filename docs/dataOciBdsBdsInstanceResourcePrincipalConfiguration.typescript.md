# `dataOciBdsBdsInstanceResourcePrincipalConfiguration` Submodule <a name="`dataOciBdsBdsInstanceResourcePrincipalConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsBdsInstanceResourcePrincipalConfiguration <a name="DataOciBdsBdsInstanceResourcePrincipalConfiguration" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configuration oci_bds_bds_instance_resource_principal_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceResourcePrincipalConfiguration } from 'rhizo-co-terraform-provider-oci'

new dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration(scope: Construct, id: string, config: DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig">DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig">DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBdsBdsInstanceResourcePrincipalConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isConstruct"></a>

```typescript
import { dataOciBdsBdsInstanceResourcePrincipalConfiguration } from 'rhizo-co-terraform-provider-oci'

dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isTerraformElement"></a>

```typescript
import { dataOciBdsBdsInstanceResourcePrincipalConfiguration } from 'rhizo-co-terraform-provider-oci'

dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isTerraformDataSource"></a>

```typescript
import { dataOciBdsBdsInstanceResourcePrincipalConfiguration } from 'rhizo-co-terraform-provider-oci'

dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport"></a>

```typescript
import { dataOciBdsBdsInstanceResourcePrincipalConfiguration } from 'rhizo-co-terraform-provider-oci'

dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciBdsBdsInstanceResourcePrincipalConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciBdsBdsInstanceResourcePrincipalConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciBdsBdsInstanceResourcePrincipalConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsBdsInstanceResourcePrincipalConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.clusterAdminPassword">clusterAdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.forceRefreshResourcePrincipalTrigger">forceRefreshResourcePrincipalTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.sessionTokenLifeSpanDurationInHours">sessionTokenLifeSpanDurationInHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.timeTokenExpiry">timeTokenExpiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.timeTokenRefreshed">timeTokenRefreshed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.bdsInstanceIdInput">bdsInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.resourcePrincipalConfigurationIdInput">resourcePrincipalConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.bdsInstanceId">bdsInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.resourcePrincipalConfigurationId">resourcePrincipalConfigurationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `clusterAdminPassword`<sup>Required</sup> <a name="clusterAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.clusterAdminPassword"></a>

```typescript
public readonly clusterAdminPassword: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `forceRefreshResourcePrincipalTrigger`<sup>Required</sup> <a name="forceRefreshResourcePrincipalTrigger" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.forceRefreshResourcePrincipalTrigger"></a>

```typescript
public readonly forceRefreshResourcePrincipalTrigger: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sessionTokenLifeSpanDurationInHours`<sup>Required</sup> <a name="sessionTokenLifeSpanDurationInHours" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.sessionTokenLifeSpanDurationInHours"></a>

```typescript
public readonly sessionTokenLifeSpanDurationInHours: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeTokenExpiry`<sup>Required</sup> <a name="timeTokenExpiry" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.timeTokenExpiry"></a>

```typescript
public readonly timeTokenExpiry: string;
```

- *Type:* string

---

##### `timeTokenRefreshed`<sup>Required</sup> <a name="timeTokenRefreshed" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.timeTokenRefreshed"></a>

```typescript
public readonly timeTokenRefreshed: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `bdsInstanceIdInput`<sup>Optional</sup> <a name="bdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.bdsInstanceIdInput"></a>

```typescript
public readonly bdsInstanceIdInput: string;
```

- *Type:* string

---

##### `resourcePrincipalConfigurationIdInput`<sup>Optional</sup> <a name="resourcePrincipalConfigurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.resourcePrincipalConfigurationIdInput"></a>

```typescript
public readonly resourcePrincipalConfigurationIdInput: string;
```

- *Type:* string

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.bdsInstanceId"></a>

```typescript
public readonly bdsInstanceId: string;
```

- *Type:* string

---

##### `resourcePrincipalConfigurationId`<sup>Required</sup> <a name="resourcePrincipalConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.resourcePrincipalConfigurationId"></a>

```typescript
public readonly resourcePrincipalConfigurationId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig <a name="DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.Initializer"></a>

```typescript
import { dataOciBdsBdsInstanceResourcePrincipalConfiguration } from 'rhizo-co-terraform-provider-oci'

const dataOciBdsBdsInstanceResourcePrincipalConfigurationConfig: dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.bdsInstanceId">bdsInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configuration#bds_instance_id DataOciBdsBdsInstanceResourcePrincipalConfiguration#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.resourcePrincipalConfigurationId">resourcePrincipalConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configuration#resource_principal_configuration_id DataOciBdsBdsInstanceResourcePrincipalConfiguration#resource_principal_configuration_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.bdsInstanceId"></a>

```typescript
public readonly bdsInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configuration#bds_instance_id DataOciBdsBdsInstanceResourcePrincipalConfiguration#bds_instance_id}.

---

##### `resourcePrincipalConfigurationId`<sup>Required</sup> <a name="resourcePrincipalConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceResourcePrincipalConfiguration.DataOciBdsBdsInstanceResourcePrincipalConfigurationConfig.property.resourcePrincipalConfigurationId"></a>

```typescript
public readonly resourcePrincipalConfigurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_resource_principal_configuration#resource_principal_configuration_id DataOciBdsBdsInstanceResourcePrincipalConfiguration#resource_principal_configuration_id}.

---



