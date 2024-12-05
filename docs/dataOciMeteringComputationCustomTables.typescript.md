# `dataOciMeteringComputationCustomTables` Submodule <a name="`dataOciMeteringComputationCustomTables` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMeteringComputationCustomTables <a name="DataOciMeteringComputationCustomTables" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_custom_tables oci_metering_computation_custom_tables}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.Initializer"></a>

```typescript
import { dataOciMeteringComputationCustomTables } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables(scope: Construct, id: string, config: DataOciMeteringComputationCustomTablesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesConfig">DataOciMeteringComputationCustomTablesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesConfig">DataOciMeteringComputationCustomTablesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciMeteringComputationCustomTablesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilter">DataOciMeteringComputationCustomTablesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMeteringComputationCustomTables resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.isConstruct"></a>

```typescript
import { dataOciMeteringComputationCustomTables } from 'rhizo-co-terraform-provider-oci'

dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.isTerraformElement"></a>

```typescript
import { dataOciMeteringComputationCustomTables } from 'rhizo-co-terraform-provider-oci'

dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.isTerraformDataSource"></a>

```typescript
import { dataOciMeteringComputationCustomTables } from 'rhizo-co-terraform-provider-oci'

dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.generateConfigForImport"></a>

```typescript
import { dataOciMeteringComputationCustomTables } from 'rhizo-co-terraform-provider-oci'

dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciMeteringComputationCustomTables resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMeteringComputationCustomTables to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMeteringComputationCustomTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_custom_tables#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMeteringComputationCustomTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.customTableCollection">customTableCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList">DataOciMeteringComputationCustomTablesCustomTableCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList">DataOciMeteringComputationCustomTablesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilter">DataOciMeteringComputationCustomTablesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.savedReportIdInput">savedReportIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.savedReportId">savedReportId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `customTableCollection`<sup>Required</sup> <a name="customTableCollection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.customTableCollection"></a>

```typescript
public readonly customTableCollection: DataOciMeteringComputationCustomTablesCustomTableCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList">DataOciMeteringComputationCustomTablesCustomTableCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.filter"></a>

```typescript
public readonly filter: DataOciMeteringComputationCustomTablesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList">DataOciMeteringComputationCustomTablesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciMeteringComputationCustomTablesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilter">DataOciMeteringComputationCustomTablesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `savedReportIdInput`<sup>Optional</sup> <a name="savedReportIdInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.savedReportIdInput"></a>

```typescript
public readonly savedReportIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `savedReportId`<sup>Required</sup> <a name="savedReportId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.savedReportId"></a>

```typescript
public readonly savedReportId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTables.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMeteringComputationCustomTablesConfig <a name="DataOciMeteringComputationCustomTablesConfig" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesConfig.Initializer"></a>

```typescript
import { dataOciMeteringComputationCustomTables } from 'rhizo-co-terraform-provider-oci'

const dataOciMeteringComputationCustomTablesConfig: dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_custom_tables#compartment_id DataOciMeteringComputationCustomTables#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesConfig.property.savedReportId">savedReportId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_custom_tables#saved_report_id DataOciMeteringComputationCustomTables#saved_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilter">DataOciMeteringComputationCustomTablesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_custom_tables#id DataOciMeteringComputationCustomTables#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_custom_tables#compartment_id DataOciMeteringComputationCustomTables#compartment_id}.

---

##### `savedReportId`<sup>Required</sup> <a name="savedReportId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesConfig.property.savedReportId"></a>

```typescript
public readonly savedReportId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_custom_tables#saved_report_id DataOciMeteringComputationCustomTables#saved_report_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciMeteringComputationCustomTablesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilter">DataOciMeteringComputationCustomTablesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_custom_tables#filter DataOciMeteringComputationCustomTables#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_custom_tables#id DataOciMeteringComputationCustomTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciMeteringComputationCustomTablesCustomTableCollection <a name="DataOciMeteringComputationCustomTablesCustomTableCollection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollection.Initializer"></a>

```typescript
import { dataOciMeteringComputationCustomTables } from 'rhizo-co-terraform-provider-oci'

const dataOciMeteringComputationCustomTablesCustomTableCollection: dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollection = { ... }
```


### DataOciMeteringComputationCustomTablesCustomTableCollectionItems <a name="DataOciMeteringComputationCustomTablesCustomTableCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItems.Initializer"></a>

```typescript
import { dataOciMeteringComputationCustomTables } from 'rhizo-co-terraform-provider-oci'

const dataOciMeteringComputationCustomTablesCustomTableCollectionItems: dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItems = { ... }
```


### DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTable <a name="DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTable" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTable"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTable.Initializer"></a>

```typescript
import { dataOciMeteringComputationCustomTables } from 'rhizo-co-terraform-provider-oci'

const dataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTable: dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTable = { ... }
```


### DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTag <a name="DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTag" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTag"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTag.Initializer"></a>

```typescript
import { dataOciMeteringComputationCustomTables } from 'rhizo-co-terraform-provider-oci'

const dataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTag: dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTag = { ... }
```


### DataOciMeteringComputationCustomTablesFilter <a name="DataOciMeteringComputationCustomTablesFilter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilter.Initializer"></a>

```typescript
import { dataOciMeteringComputationCustomTables } from 'rhizo-co-terraform-provider-oci'

const dataOciMeteringComputationCustomTablesFilter: dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_custom_tables#name DataOciMeteringComputationCustomTables#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_custom_tables#values DataOciMeteringComputationCustomTables#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_custom_tables#regex DataOciMeteringComputationCustomTables#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_custom_tables#name DataOciMeteringComputationCustomTables#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_custom_tables#values DataOciMeteringComputationCustomTables#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_custom_tables#regex DataOciMeteringComputationCustomTables#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList <a name="DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList.Initializer"></a>

```typescript
import { dataOciMeteringComputationCustomTables } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference <a name="DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciMeteringComputationCustomTables } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.property.savedCustomTable">savedCustomTable</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList">DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.property.savedReportId">savedReportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItems">DataOciMeteringComputationCustomTablesCustomTableCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `savedCustomTable`<sup>Required</sup> <a name="savedCustomTable" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.property.savedCustomTable"></a>

```typescript
public readonly savedCustomTable: DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList">DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList</a>

---

##### `savedReportId`<sup>Required</sup> <a name="savedReportId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.property.savedReportId"></a>

```typescript
public readonly savedReportId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMeteringComputationCustomTablesCustomTableCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItems">DataOciMeteringComputationCustomTablesCustomTableCollectionItems</a>

---


### DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList <a name="DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList.Initializer"></a>

```typescript
import { dataOciMeteringComputationCustomTables } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList.get"></a>

```typescript
public get(index: number): DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference <a name="DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.Initializer"></a>

```typescript
import { dataOciMeteringComputationCustomTables } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTag">DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTag;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTag">DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTag</a>

---


### DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList <a name="DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList.Initializer"></a>

```typescript
import { dataOciMeteringComputationCustomTables } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList.get"></a>

```typescript
public get(index: number): DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference <a name="DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.Initializer"></a>

```typescript
import { dataOciMeteringComputationCustomTables } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.property.columnGroupBy">columnGroupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.property.compartmentDepth">compartmentDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.property.groupByTag">groupByTag</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList">DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.property.rowGroupBy">rowGroupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTable">DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnGroupBy`<sup>Required</sup> <a name="columnGroupBy" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.property.columnGroupBy"></a>

```typescript
public readonly columnGroupBy: string[];
```

- *Type:* string[]

---

##### `compartmentDepth`<sup>Required</sup> <a name="compartmentDepth" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.property.compartmentDepth"></a>

```typescript
public readonly compartmentDepth: number;
```

- *Type:* number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `groupByTag`<sup>Required</sup> <a name="groupByTag" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.property.groupByTag"></a>

```typescript
public readonly groupByTag: DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList">DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableGroupByTagList</a>

---

##### `rowGroupBy`<sup>Required</sup> <a name="rowGroupBy" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.property.rowGroupBy"></a>

```typescript
public readonly rowGroupBy: string[];
```

- *Type:* string[]

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTable;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTable">DataOciMeteringComputationCustomTablesCustomTableCollectionItemsSavedCustomTable</a>

---


### DataOciMeteringComputationCustomTablesCustomTableCollectionList <a name="DataOciMeteringComputationCustomTablesCustomTableCollectionList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList.Initializer"></a>

```typescript
import { dataOciMeteringComputationCustomTables } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList.get"></a>

```typescript
public get(index: number): DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference <a name="DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciMeteringComputationCustomTables } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList">DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollection">DataOciMeteringComputationCustomTablesCustomTableCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList">DataOciMeteringComputationCustomTablesCustomTableCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMeteringComputationCustomTablesCustomTableCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesCustomTableCollection">DataOciMeteringComputationCustomTablesCustomTableCollection</a>

---


### DataOciMeteringComputationCustomTablesFilterList <a name="DataOciMeteringComputationCustomTablesFilterList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList.Initializer"></a>

```typescript
import { dataOciMeteringComputationCustomTables } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList.get"></a>

```typescript
public get(index: number): DataOciMeteringComputationCustomTablesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilter">DataOciMeteringComputationCustomTablesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMeteringComputationCustomTablesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilter">DataOciMeteringComputationCustomTablesFilter</a>[]

---


### DataOciMeteringComputationCustomTablesFilterOutputReference <a name="DataOciMeteringComputationCustomTablesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciMeteringComputationCustomTables } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilter">DataOciMeteringComputationCustomTablesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMeteringComputationCustomTablesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationCustomTables.DataOciMeteringComputationCustomTablesFilter">DataOciMeteringComputationCustomTablesFilter</a>

---



