# `dataOciMeteringComputationCustomTable` Submodule <a name="`dataOciMeteringComputationCustomTable` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMeteringComputationCustomTable <a name="DataOciMeteringComputationCustomTable" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_custom_table oci_metering_computation_custom_table}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.Initializer"></a>

```typescript
import { dataOciMeteringComputationCustomTable } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable(scope: Construct, id: string, config: DataOciMeteringComputationCustomTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableConfig">DataOciMeteringComputationCustomTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableConfig">DataOciMeteringComputationCustomTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMeteringComputationCustomTable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.isConstruct"></a>

```typescript
import { dataOciMeteringComputationCustomTable } from 'rhizo-co-terraform-provider-oci'

dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.isTerraformElement"></a>

```typescript
import { dataOciMeteringComputationCustomTable } from 'rhizo-co-terraform-provider-oci'

dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.isTerraformDataSource"></a>

```typescript
import { dataOciMeteringComputationCustomTable } from 'rhizo-co-terraform-provider-oci'

dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.generateConfigForImport"></a>

```typescript
import { dataOciMeteringComputationCustomTable } from 'rhizo-co-terraform-provider-oci'

dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciMeteringComputationCustomTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMeteringComputationCustomTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMeteringComputationCustomTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_custom_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMeteringComputationCustomTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.savedCustomTable">savedCustomTable</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList">DataOciMeteringComputationCustomTableSavedCustomTableList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.savedReportId">savedReportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.customTableIdInput">customTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.customTableId">customTableId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `savedCustomTable`<sup>Required</sup> <a name="savedCustomTable" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.savedCustomTable"></a>

```typescript
public readonly savedCustomTable: DataOciMeteringComputationCustomTableSavedCustomTableList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList">DataOciMeteringComputationCustomTableSavedCustomTableList</a>

---

##### `savedReportId`<sup>Required</sup> <a name="savedReportId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.savedReportId"></a>

```typescript
public readonly savedReportId: string;
```

- *Type:* string

---

##### `customTableIdInput`<sup>Optional</sup> <a name="customTableIdInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.customTableIdInput"></a>

```typescript
public readonly customTableIdInput: string;
```

- *Type:* string

---

##### `customTableId`<sup>Required</sup> <a name="customTableId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.customTableId"></a>

```typescript
public readonly customTableId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMeteringComputationCustomTableConfig <a name="DataOciMeteringComputationCustomTableConfig" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableConfig.Initializer"></a>

```typescript
import { dataOciMeteringComputationCustomTable } from 'rhizo-co-terraform-provider-oci'

const dataOciMeteringComputationCustomTableConfig: dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableConfig.property.customTableId">customTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_custom_table#custom_table_id DataOciMeteringComputationCustomTable#custom_table_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customTableId`<sup>Required</sup> <a name="customTableId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableConfig.property.customTableId"></a>

```typescript
public readonly customTableId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_custom_table#custom_table_id DataOciMeteringComputationCustomTable#custom_table_id}.

---

### DataOciMeteringComputationCustomTableSavedCustomTable <a name="DataOciMeteringComputationCustomTableSavedCustomTable" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTable"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTable.Initializer"></a>

```typescript
import { dataOciMeteringComputationCustomTable } from 'rhizo-co-terraform-provider-oci'

const dataOciMeteringComputationCustomTableSavedCustomTable: dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTable = { ... }
```


### DataOciMeteringComputationCustomTableSavedCustomTableGroupByTag <a name="DataOciMeteringComputationCustomTableSavedCustomTableGroupByTag" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTag"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTag.Initializer"></a>

```typescript
import { dataOciMeteringComputationCustomTable } from 'rhizo-co-terraform-provider-oci'

const dataOciMeteringComputationCustomTableSavedCustomTableGroupByTag: dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTag = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList <a name="DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList.Initializer"></a>

```typescript
import { dataOciMeteringComputationCustomTable } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList.get"></a>

```typescript
public get(index: number): DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference <a name="DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.Initializer"></a>

```typescript
import { dataOciMeteringComputationCustomTable } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTag">DataOciMeteringComputationCustomTableSavedCustomTableGroupByTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMeteringComputationCustomTableSavedCustomTableGroupByTag;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTag">DataOciMeteringComputationCustomTableSavedCustomTableGroupByTag</a>

---


### DataOciMeteringComputationCustomTableSavedCustomTableList <a name="DataOciMeteringComputationCustomTableSavedCustomTableList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList.Initializer"></a>

```typescript
import { dataOciMeteringComputationCustomTable } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList.get"></a>

```typescript
public get(index: number): DataOciMeteringComputationCustomTableSavedCustomTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMeteringComputationCustomTableSavedCustomTableOutputReference <a name="DataOciMeteringComputationCustomTableSavedCustomTableOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.Initializer"></a>

```typescript
import { dataOciMeteringComputationCustomTable } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.property.columnGroupBy">columnGroupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.property.compartmentDepth">compartmentDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.property.groupByTag">groupByTag</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList">DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.property.rowGroupBy">rowGroupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTable">DataOciMeteringComputationCustomTableSavedCustomTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnGroupBy`<sup>Required</sup> <a name="columnGroupBy" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.property.columnGroupBy"></a>

```typescript
public readonly columnGroupBy: string[];
```

- *Type:* string[]

---

##### `compartmentDepth`<sup>Required</sup> <a name="compartmentDepth" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.property.compartmentDepth"></a>

```typescript
public readonly compartmentDepth: number;
```

- *Type:* number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `groupByTag`<sup>Required</sup> <a name="groupByTag" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.property.groupByTag"></a>

```typescript
public readonly groupByTag: DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList">DataOciMeteringComputationCustomTableSavedCustomTableGroupByTagList</a>

---

##### `rowGroupBy`<sup>Required</sup> <a name="rowGroupBy" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.property.rowGroupBy"></a>

```typescript
public readonly rowGroupBy: string[];
```

- *Type:* string[]

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMeteringComputationCustomTableSavedCustomTable;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTable.DataOciMeteringComputationCustomTableSavedCustomTable">DataOciMeteringComputationCustomTableSavedCustomTable</a>

---



