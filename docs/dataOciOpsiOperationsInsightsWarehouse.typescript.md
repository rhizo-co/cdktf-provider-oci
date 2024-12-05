# `dataOciOpsiOperationsInsightsWarehouse` Submodule <a name="`dataOciOpsiOperationsInsightsWarehouse` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiOperationsInsightsWarehouse <a name="DataOciOpsiOperationsInsightsWarehouse" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse oci_opsi_operations_insights_warehouse}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouse } from 'rhizo-co-terraform-provider-oci'

new dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse(scope: Construct, id: string, config: DataOciOpsiOperationsInsightsWarehouseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig">DataOciOpsiOperationsInsightsWarehouseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig">DataOciOpsiOperationsInsightsWarehouseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiOperationsInsightsWarehouse resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.isConstruct"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouse } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.isTerraformElement"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouse } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.isTerraformDataSource"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouse } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.generateConfigForImport"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouse } from 'rhizo-co-terraform-provider-oci'

dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOpsiOperationsInsightsWarehouse resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOpsiOperationsInsightsWarehouse to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOpsiOperationsInsightsWarehouse that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiOperationsInsightsWarehouse to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.cpuAllocated">cpuAllocated</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.cpuUsed">cpuUsed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.dynamicGroupId">dynamicGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.operationsInsightsTenancyId">operationsInsightsTenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.storageAllocatedInGbs">storageAllocatedInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.storageUsedInGbs">storageUsedInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.timeLastWalletRotated">timeLastWalletRotated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.operationsInsightsWarehouseIdInput">operationsInsightsWarehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.operationsInsightsWarehouseId">operationsInsightsWarehouseId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `cpuAllocated`<sup>Required</sup> <a name="cpuAllocated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.cpuAllocated"></a>

```typescript
public readonly cpuAllocated: number;
```

- *Type:* number

---

##### `cpuUsed`<sup>Required</sup> <a name="cpuUsed" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.cpuUsed"></a>

```typescript
public readonly cpuUsed: number;
```

- *Type:* number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `dynamicGroupId`<sup>Required</sup> <a name="dynamicGroupId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.dynamicGroupId"></a>

```typescript
public readonly dynamicGroupId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `operationsInsightsTenancyId`<sup>Required</sup> <a name="operationsInsightsTenancyId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.operationsInsightsTenancyId"></a>

```typescript
public readonly operationsInsightsTenancyId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storageAllocatedInGbs`<sup>Required</sup> <a name="storageAllocatedInGbs" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.storageAllocatedInGbs"></a>

```typescript
public readonly storageAllocatedInGbs: number;
```

- *Type:* number

---

##### `storageUsedInGbs`<sup>Required</sup> <a name="storageUsedInGbs" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.storageUsedInGbs"></a>

```typescript
public readonly storageUsedInGbs: number;
```

- *Type:* number

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastWalletRotated`<sup>Required</sup> <a name="timeLastWalletRotated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.timeLastWalletRotated"></a>

```typescript
public readonly timeLastWalletRotated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `operationsInsightsWarehouseIdInput`<sup>Optional</sup> <a name="operationsInsightsWarehouseIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.operationsInsightsWarehouseIdInput"></a>

```typescript
public readonly operationsInsightsWarehouseIdInput: string;
```

- *Type:* string

---

##### `operationsInsightsWarehouseId`<sup>Required</sup> <a name="operationsInsightsWarehouseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.operationsInsightsWarehouseId"></a>

```typescript
public readonly operationsInsightsWarehouseId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouse.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiOperationsInsightsWarehouseConfig <a name="DataOciOpsiOperationsInsightsWarehouseConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.Initializer"></a>

```typescript
import { dataOciOpsiOperationsInsightsWarehouse } from 'rhizo-co-terraform-provider-oci'

const dataOciOpsiOperationsInsightsWarehouseConfig: dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.operationsInsightsWarehouseId">operationsInsightsWarehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse#operations_insights_warehouse_id DataOciOpsiOperationsInsightsWarehouse#operations_insights_warehouse_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `operationsInsightsWarehouseId`<sup>Required</sup> <a name="operationsInsightsWarehouseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouse.DataOciOpsiOperationsInsightsWarehouseConfig.property.operationsInsightsWarehouseId"></a>

```typescript
public readonly operationsInsightsWarehouseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse#operations_insights_warehouse_id DataOciOpsiOperationsInsightsWarehouse#operations_insights_warehouse_id}.

---



