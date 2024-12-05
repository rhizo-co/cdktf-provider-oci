# `dataOciLogAnalyticsNamespaceScheduledTask` Submodule <a name="`dataOciLogAnalyticsNamespaceScheduledTask` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsNamespaceScheduledTask <a name="DataOciLogAnalyticsNamespaceScheduledTask" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_task oci_log_analytics_namespace_scheduled_task}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceScheduledTask } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask(scope: Construct, id: string, config: DataOciLogAnalyticsNamespaceScheduledTaskConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig">DataOciLogAnalyticsNamespaceScheduledTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig">DataOciLogAnalyticsNamespaceScheduledTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceScheduledTask resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.isConstruct"></a>

```typescript
import { dataOciLogAnalyticsNamespaceScheduledTask } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.isTerraformElement"></a>

```typescript
import { dataOciLogAnalyticsNamespaceScheduledTask } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.isTerraformDataSource"></a>

```typescript
import { dataOciLogAnalyticsNamespaceScheduledTask } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.generateConfigForImport"></a>

```typescript
import { dataOciLogAnalyticsNamespaceScheduledTask } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceScheduledTask resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLogAnalyticsNamespaceScheduledTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLogAnalyticsNamespaceScheduledTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsNamespaceScheduledTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.action">action</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList">DataOciLogAnalyticsNamespaceScheduledTaskActionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.numOccurrences">numOccurrences</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.savedSearchId">savedSearchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.schedules">schedules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList">DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.taskStatus">taskStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.taskType">taskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.workRequestId">workRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.scheduledTaskIdInput">scheduledTaskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.scheduledTaskId">scheduledTaskId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.action"></a>

```typescript
public readonly action: DataOciLogAnalyticsNamespaceScheduledTaskActionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList">DataOciLogAnalyticsNamespaceScheduledTaskActionList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `numOccurrences`<sup>Required</sup> <a name="numOccurrences" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.numOccurrences"></a>

```typescript
public readonly numOccurrences: string;
```

- *Type:* string

---

##### `savedSearchId`<sup>Required</sup> <a name="savedSearchId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.savedSearchId"></a>

```typescript
public readonly savedSearchId: string;
```

- *Type:* string

---

##### `schedules`<sup>Required</sup> <a name="schedules" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.schedules"></a>

```typescript
public readonly schedules: DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList">DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `taskStatus`<sup>Required</sup> <a name="taskStatus" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.taskStatus"></a>

```typescript
public readonly taskStatus: string;
```

- *Type:* string

---

##### `taskType`<sup>Required</sup> <a name="taskType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.taskType"></a>

```typescript
public readonly taskType: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `workRequestId`<sup>Required</sup> <a name="workRequestId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.workRequestId"></a>

```typescript
public readonly workRequestId: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `scheduledTaskIdInput`<sup>Optional</sup> <a name="scheduledTaskIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.scheduledTaskIdInput"></a>

```typescript
public readonly scheduledTaskIdInput: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `scheduledTaskId`<sup>Required</sup> <a name="scheduledTaskId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.scheduledTaskId"></a>

```typescript
public readonly scheduledTaskId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTask.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsNamespaceScheduledTaskAction <a name="DataOciLogAnalyticsNamespaceScheduledTaskAction" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskAction.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceScheduledTask } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsNamespaceScheduledTaskAction: dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskAction = { ... }
```


### DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtraction <a name="DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtraction" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtraction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtraction.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceScheduledTask } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtraction: dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtraction = { ... }
```


### DataOciLogAnalyticsNamespaceScheduledTaskConfig <a name="DataOciLogAnalyticsNamespaceScheduledTaskConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceScheduledTask } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsNamespaceScheduledTaskConfig: dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_task#namespace DataOciLogAnalyticsNamespaceScheduledTask#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.scheduledTaskId">scheduledTaskId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_task#scheduled_task_id DataOciLogAnalyticsNamespaceScheduledTask#scheduled_task_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_task#namespace DataOciLogAnalyticsNamespaceScheduledTask#namespace}.

---

##### `scheduledTaskId`<sup>Required</sup> <a name="scheduledTaskId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskConfig.property.scheduledTaskId"></a>

```typescript
public readonly scheduledTaskId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_task#scheduled_task_id DataOciLogAnalyticsNamespaceScheduledTask#scheduled_task_id}.

---

### DataOciLogAnalyticsNamespaceScheduledTaskSchedules <a name="DataOciLogAnalyticsNamespaceScheduledTaskSchedules" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedules.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceScheduledTask } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsNamespaceScheduledTaskSchedules: dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedules = { ... }
```


### DataOciLogAnalyticsNamespaceScheduledTaskSchedulesSchedule <a name="DataOciLogAnalyticsNamespaceScheduledTaskSchedulesSchedule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesSchedule.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceScheduledTask } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsNamespaceScheduledTaskSchedulesSchedule: dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesSchedule = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsNamespaceScheduledTaskActionList <a name="DataOciLogAnalyticsNamespaceScheduledTaskActionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceScheduledTask } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList <a name="DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceScheduledTask } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference <a name="DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceScheduledTask } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.resourceGroup">resourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtraction">DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtraction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.resourceGroup"></a>

```typescript
public readonly resourceGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtraction;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtraction">DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtraction</a>

---


### DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference <a name="DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceScheduledTask } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.metricExtraction">metricExtraction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList">DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.purgeCompartmentId">purgeCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.purgeDuration">purgeDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.queryString">queryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.savedSearchId">savedSearchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskAction">DataOciLogAnalyticsNamespaceScheduledTaskAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `metricExtraction`<sup>Required</sup> <a name="metricExtraction" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.metricExtraction"></a>

```typescript
public readonly metricExtraction: DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList">DataOciLogAnalyticsNamespaceScheduledTaskActionMetricExtractionList</a>

---

##### `purgeCompartmentId`<sup>Required</sup> <a name="purgeCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.purgeCompartmentId"></a>

```typescript
public readonly purgeCompartmentId: string;
```

- *Type:* string

---

##### `purgeDuration`<sup>Required</sup> <a name="purgeDuration" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.purgeDuration"></a>

```typescript
public readonly purgeDuration: string;
```

- *Type:* string

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.queryString"></a>

```typescript
public readonly queryString: string;
```

- *Type:* string

---

##### `savedSearchId`<sup>Required</sup> <a name="savedSearchId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.savedSearchId"></a>

```typescript
public readonly savedSearchId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsNamespaceScheduledTaskAction;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskAction">DataOciLogAnalyticsNamespaceScheduledTaskAction</a>

---


### DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList <a name="DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceScheduledTask } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference <a name="DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceScheduledTask } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.property.schedule">schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList">DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedules">DataOciLogAnalyticsNamespaceScheduledTaskSchedules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.property.schedule"></a>

```typescript
public readonly schedule: DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList">DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsNamespaceScheduledTaskSchedules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedules">DataOciLogAnalyticsNamespaceScheduledTaskSchedules</a>

---


### DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList <a name="DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceScheduledTask } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference <a name="DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsNamespaceScheduledTask } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.misfirePolicy">misfirePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.recurringInterval">recurringInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.repeatCount">repeatCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesSchedule">DataOciLogAnalyticsNamespaceScheduledTaskSchedulesSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `misfirePolicy`<sup>Required</sup> <a name="misfirePolicy" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.misfirePolicy"></a>

```typescript
public readonly misfirePolicy: string;
```

- *Type:* string

---

##### `recurringInterval`<sup>Required</sup> <a name="recurringInterval" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.recurringInterval"></a>

```typescript
public readonly recurringInterval: string;
```

- *Type:* string

---

##### `repeatCount`<sup>Required</sup> <a name="repeatCount" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.repeatCount"></a>

```typescript
public readonly repeatCount: number;
```

- *Type:* number

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsNamespaceScheduledTaskSchedulesSchedule;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTask.DataOciLogAnalyticsNamespaceScheduledTaskSchedulesSchedule">DataOciLogAnalyticsNamespaceScheduledTaskSchedulesSchedule</a>

---



