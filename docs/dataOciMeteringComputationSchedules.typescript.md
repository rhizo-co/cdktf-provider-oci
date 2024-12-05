# `dataOciMeteringComputationSchedules` Submodule <a name="`dataOciMeteringComputationSchedules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMeteringComputationSchedules <a name="DataOciMeteringComputationSchedules" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_schedules oci_metering_computation_schedules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.Initializer"></a>

```typescript
import { dataOciMeteringComputationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules(scope: Construct, id: string, config: DataOciMeteringComputationSchedulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesConfig">DataOciMeteringComputationSchedulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesConfig">DataOciMeteringComputationSchedulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciMeteringComputationSchedulesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilter">DataOciMeteringComputationSchedulesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMeteringComputationSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.isConstruct"></a>

```typescript
import { dataOciMeteringComputationSchedules } from 'rhizo-co-terraform-provider-oci'

dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.isTerraformElement"></a>

```typescript
import { dataOciMeteringComputationSchedules } from 'rhizo-co-terraform-provider-oci'

dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.isTerraformDataSource"></a>

```typescript
import { dataOciMeteringComputationSchedules } from 'rhizo-co-terraform-provider-oci'

dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.generateConfigForImport"></a>

```typescript
import { dataOciMeteringComputationSchedules } from 'rhizo-co-terraform-provider-oci'

dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciMeteringComputationSchedules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMeteringComputationSchedules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMeteringComputationSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_schedules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMeteringComputationSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList">DataOciMeteringComputationSchedulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.scheduleCollection">scheduleCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList">DataOciMeteringComputationSchedulesScheduleCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilter">DataOciMeteringComputationSchedulesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.filter"></a>

```typescript
public readonly filter: DataOciMeteringComputationSchedulesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList">DataOciMeteringComputationSchedulesFilterList</a>

---

##### `scheduleCollection`<sup>Required</sup> <a name="scheduleCollection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.scheduleCollection"></a>

```typescript
public readonly scheduleCollection: DataOciMeteringComputationSchedulesScheduleCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList">DataOciMeteringComputationSchedulesScheduleCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciMeteringComputationSchedulesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilter">DataOciMeteringComputationSchedulesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMeteringComputationSchedulesConfig <a name="DataOciMeteringComputationSchedulesConfig" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesConfig.Initializer"></a>

```typescript
import { dataOciMeteringComputationSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciMeteringComputationSchedulesConfig: dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_schedules#compartment_id DataOciMeteringComputationSchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilter">DataOciMeteringComputationSchedulesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_schedules#id DataOciMeteringComputationSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_schedules#name DataOciMeteringComputationSchedules#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_schedules#compartment_id DataOciMeteringComputationSchedules#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciMeteringComputationSchedulesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilter">DataOciMeteringComputationSchedulesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_schedules#filter DataOciMeteringComputationSchedules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_schedules#id DataOciMeteringComputationSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_schedules#name DataOciMeteringComputationSchedules#name}.

---

### DataOciMeteringComputationSchedulesFilter <a name="DataOciMeteringComputationSchedulesFilter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilter.Initializer"></a>

```typescript
import { dataOciMeteringComputationSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciMeteringComputationSchedulesFilter: dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_schedules#name DataOciMeteringComputationSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_schedules#values DataOciMeteringComputationSchedules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_schedules#regex DataOciMeteringComputationSchedules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_schedules#name DataOciMeteringComputationSchedules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_schedules#values DataOciMeteringComputationSchedules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_schedules#regex DataOciMeteringComputationSchedules#regex}.

---

### DataOciMeteringComputationSchedulesScheduleCollection <a name="DataOciMeteringComputationSchedulesScheduleCollection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollection.Initializer"></a>

```typescript
import { dataOciMeteringComputationSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciMeteringComputationSchedulesScheduleCollection: dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollection = { ... }
```


### DataOciMeteringComputationSchedulesScheduleCollectionItems <a name="DataOciMeteringComputationSchedulesScheduleCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItems.Initializer"></a>

```typescript
import { dataOciMeteringComputationSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciMeteringComputationSchedulesScheduleCollectionItems: dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItems = { ... }
```


### DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryProperties <a name="DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryProperties" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryProperties.Initializer"></a>

```typescript
import { dataOciMeteringComputationSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciMeteringComputationSchedulesScheduleCollectionItemsQueryProperties: dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryProperties = { ... }
```


### DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRange <a name="DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRange" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRange.Initializer"></a>

```typescript
import { dataOciMeteringComputationSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRange: dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRange = { ... }
```


### DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTag <a name="DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTag" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTag"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTag.Initializer"></a>

```typescript
import { dataOciMeteringComputationSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTag: dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTag = { ... }
```


### DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocation <a name="DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocation" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocation.Initializer"></a>

```typescript
import { dataOciMeteringComputationSchedules } from 'rhizo-co-terraform-provider-oci'

const dataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocation: dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocation = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMeteringComputationSchedulesFilterList <a name="DataOciMeteringComputationSchedulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList.Initializer"></a>

```typescript
import { dataOciMeteringComputationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList.get"></a>

```typescript
public get(index: number): DataOciMeteringComputationSchedulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilter">DataOciMeteringComputationSchedulesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMeteringComputationSchedulesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilter">DataOciMeteringComputationSchedulesFilter</a>[]

---


### DataOciMeteringComputationSchedulesFilterOutputReference <a name="DataOciMeteringComputationSchedulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciMeteringComputationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilter">DataOciMeteringComputationSchedulesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMeteringComputationSchedulesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesFilter">DataOciMeteringComputationSchedulesFilter</a>

---


### DataOciMeteringComputationSchedulesScheduleCollectionItemsList <a name="DataOciMeteringComputationSchedulesScheduleCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList.Initializer"></a>

```typescript
import { dataOciMeteringComputationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference <a name="DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciMeteringComputationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.outputFileFormat">outputFileFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.queryProperties">queryProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList">DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.resultLocation">resultLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList">DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.savedReportId">savedReportId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.scheduleRecurrences">scheduleRecurrences</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.timeNextRun">timeNextRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.timeScheduled">timeScheduled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItems">DataOciMeteringComputationSchedulesScheduleCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputFileFormat`<sup>Required</sup> <a name="outputFileFormat" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.outputFileFormat"></a>

```typescript
public readonly outputFileFormat: string;
```

- *Type:* string

---

##### `queryProperties`<sup>Required</sup> <a name="queryProperties" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.queryProperties"></a>

```typescript
public readonly queryProperties: DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList">DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList</a>

---

##### `resultLocation`<sup>Required</sup> <a name="resultLocation" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.resultLocation"></a>

```typescript
public readonly resultLocation: DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList">DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList</a>

---

##### `savedReportId`<sup>Required</sup> <a name="savedReportId" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.savedReportId"></a>

```typescript
public readonly savedReportId: string;
```

- *Type:* string

---

##### `scheduleRecurrences`<sup>Required</sup> <a name="scheduleRecurrences" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.scheduleRecurrences"></a>

```typescript
public readonly scheduleRecurrences: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeNextRun`<sup>Required</sup> <a name="timeNextRun" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.timeNextRun"></a>

```typescript
public readonly timeNextRun: string;
```

- *Type:* string

---

##### `timeScheduled`<sup>Required</sup> <a name="timeScheduled" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.timeScheduled"></a>

```typescript
public readonly timeScheduled: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMeteringComputationSchedulesScheduleCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItems">DataOciMeteringComputationSchedulesScheduleCollectionItems</a>

---


### DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList <a name="DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList.Initializer"></a>

```typescript
import { dataOciMeteringComputationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList.get"></a>

```typescript
public get(index: number): DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference <a name="DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.Initializer"></a>

```typescript
import { dataOciMeteringComputationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.property.dateRangeType">dateRangeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.property.dynamicDateRangeType">dynamicDateRangeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.property.timeUsageEnded">timeUsageEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.property.timeUsageStarted">timeUsageStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRange">DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dateRangeType`<sup>Required</sup> <a name="dateRangeType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.property.dateRangeType"></a>

```typescript
public readonly dateRangeType: string;
```

- *Type:* string

---

##### `dynamicDateRangeType`<sup>Required</sup> <a name="dynamicDateRangeType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.property.dynamicDateRangeType"></a>

```typescript
public readonly dynamicDateRangeType: string;
```

- *Type:* string

---

##### `timeUsageEnded`<sup>Required</sup> <a name="timeUsageEnded" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.property.timeUsageEnded"></a>

```typescript
public readonly timeUsageEnded: string;
```

- *Type:* string

---

##### `timeUsageStarted`<sup>Required</sup> <a name="timeUsageStarted" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.property.timeUsageStarted"></a>

```typescript
public readonly timeUsageStarted: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRange">DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRange</a>

---


### DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList <a name="DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList.Initializer"></a>

```typescript
import { dataOciMeteringComputationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList.get"></a>

```typescript
public get(index: number): DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference <a name="DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.Initializer"></a>

```typescript
import { dataOciMeteringComputationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTag">DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTag;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTag">DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTag</a>

---


### DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList <a name="DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList.Initializer"></a>

```typescript
import { dataOciMeteringComputationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList.get"></a>

```typescript
public get(index: number): DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference <a name="DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.Initializer"></a>

```typescript
import { dataOciMeteringComputationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.property.compartmentDepth">compartmentDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.property.dateRange">dateRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList">DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.property.granularity">granularity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.property.groupBy">groupBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.property.groupByTag">groupByTag</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList">DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.property.isAggregateByTime">isAggregateByTime</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.property.queryType">queryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryProperties">DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentDepth`<sup>Required</sup> <a name="compartmentDepth" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.property.compartmentDepth"></a>

```typescript
public readonly compartmentDepth: number;
```

- *Type:* number

---

##### `dateRange`<sup>Required</sup> <a name="dateRange" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.property.dateRange"></a>

```typescript
public readonly dateRange: DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList">DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesDateRangeList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.property.granularity"></a>

```typescript
public readonly granularity: string;
```

- *Type:* string

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.property.groupBy"></a>

```typescript
public readonly groupBy: string[];
```

- *Type:* string[]

---

##### `groupByTag`<sup>Required</sup> <a name="groupByTag" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.property.groupByTag"></a>

```typescript
public readonly groupByTag: DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList">DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesGroupByTagList</a>

---

##### `isAggregateByTime`<sup>Required</sup> <a name="isAggregateByTime" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.property.isAggregateByTime"></a>

```typescript
public readonly isAggregateByTime: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `queryType`<sup>Required</sup> <a name="queryType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.property.queryType"></a>

```typescript
public readonly queryType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryProperties;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryProperties">DataOciMeteringComputationSchedulesScheduleCollectionItemsQueryProperties</a>

---


### DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList <a name="DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList.Initializer"></a>

```typescript
import { dataOciMeteringComputationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList.get"></a>

```typescript
public get(index: number): DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference <a name="DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.Initializer"></a>

```typescript
import { dataOciMeteringComputationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.property.locationType">locationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocation">DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `locationType`<sup>Required</sup> <a name="locationType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.property.locationType"></a>

```typescript
public readonly locationType: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocation">DataOciMeteringComputationSchedulesScheduleCollectionItemsResultLocation</a>

---


### DataOciMeteringComputationSchedulesScheduleCollectionList <a name="DataOciMeteringComputationSchedulesScheduleCollectionList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList.Initializer"></a>

```typescript
import { dataOciMeteringComputationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList.get"></a>

```typescript
public get(index: number): DataOciMeteringComputationSchedulesScheduleCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMeteringComputationSchedulesScheduleCollectionOutputReference <a name="DataOciMeteringComputationSchedulesScheduleCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciMeteringComputationSchedules } from 'rhizo-co-terraform-provider-oci'

new dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList">DataOciMeteringComputationSchedulesScheduleCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollection">DataOciMeteringComputationSchedulesScheduleCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciMeteringComputationSchedulesScheduleCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionItemsList">DataOciMeteringComputationSchedulesScheduleCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMeteringComputationSchedulesScheduleCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationSchedules.DataOciMeteringComputationSchedulesScheduleCollection">DataOciMeteringComputationSchedulesScheduleCollection</a>

---



