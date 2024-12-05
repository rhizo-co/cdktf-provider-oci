# `dataOciStackMonitoringMetricExtensions` Submodule <a name="`dataOciStackMonitoringMetricExtensions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringMetricExtensions <a name="DataOciStackMonitoringMetricExtensions" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions oci_stack_monitoring_metric_extensions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions(scope: Construct, id: string, config: DataOciStackMonitoringMetricExtensionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig">DataOciStackMonitoringMetricExtensionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig">DataOciStackMonitoringMetricExtensionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetEnabledOnResourceId">resetEnabledOnResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciStackMonitoringMetricExtensionsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>[]

---

##### `resetEnabledOnResourceId` <a name="resetEnabledOnResourceId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetEnabledOnResourceId"></a>

```typescript
public resetEnabledOnResourceId(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetName"></a>

```typescript
public resetName(): void
```

##### `resetResourceType` <a name="resetResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetState"></a>

```typescript
public resetState(): void
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringMetricExtensions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isConstruct"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isTerraformElement"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isTerraformDataSource"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.generateConfigForImport"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciStackMonitoringMetricExtensions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciStackMonitoringMetricExtensions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciStackMonitoringMetricExtensions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringMetricExtensions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList">DataOciStackMonitoringMetricExtensionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.metricExtensionCollection">metricExtensionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.enabledOnResourceIdInput">enabledOnResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.enabledOnResourceId">enabledOnResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.filter"></a>

```typescript
public readonly filter: DataOciStackMonitoringMetricExtensionsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList">DataOciStackMonitoringMetricExtensionsFilterList</a>

---

##### `metricExtensionCollection`<sup>Required</sup> <a name="metricExtensionCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.metricExtensionCollection"></a>

```typescript
public readonly metricExtensionCollection: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `enabledOnResourceIdInput`<sup>Optional</sup> <a name="enabledOnResourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.enabledOnResourceIdInput"></a>

```typescript
public readonly enabledOnResourceIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciStackMonitoringMetricExtensionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `enabledOnResourceId`<sup>Required</sup> <a name="enabledOnResourceId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.enabledOnResourceId"></a>

```typescript
public readonly enabledOnResourceId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringMetricExtensionsConfig <a name="DataOciStackMonitoringMetricExtensionsConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringMetricExtensionsConfig: dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#compartment_id DataOciStackMonitoringMetricExtensions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.enabledOnResourceId">enabledOnResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#enabled_on_resource_id DataOciStackMonitoringMetricExtensions#enabled_on_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#id DataOciStackMonitoringMetricExtensions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#name DataOciStackMonitoringMetricExtensions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#resource_type DataOciStackMonitoringMetricExtensions#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#state DataOciStackMonitoringMetricExtensions#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#status DataOciStackMonitoringMetricExtensions#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#compartment_id DataOciStackMonitoringMetricExtensions#compartment_id}.

---

##### `enabledOnResourceId`<sup>Optional</sup> <a name="enabledOnResourceId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.enabledOnResourceId"></a>

```typescript
public readonly enabledOnResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#enabled_on_resource_id DataOciStackMonitoringMetricExtensions#enabled_on_resource_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciStackMonitoringMetricExtensionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#filter DataOciStackMonitoringMetricExtensions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#id DataOciStackMonitoringMetricExtensions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#name DataOciStackMonitoringMetricExtensions#name}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#resource_type DataOciStackMonitoringMetricExtensions#resource_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#state DataOciStackMonitoringMetricExtensions#state}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#status DataOciStackMonitoringMetricExtensions#status}.

---

### DataOciStackMonitoringMetricExtensionsFilter <a name="DataOciStackMonitoringMetricExtensionsFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringMetricExtensionsFilter: dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#name DataOciStackMonitoringMetricExtensions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#values DataOciStackMonitoringMetricExtensions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#regex DataOciStackMonitoringMetricExtensions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#name DataOciStackMonitoringMetricExtensions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#values DataOciStackMonitoringMetricExtensions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#regex DataOciStackMonitoringMetricExtensions#regex}.

---

### DataOciStackMonitoringMetricExtensionsMetricExtensionCollection <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollection.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringMetricExtensionsMetricExtensionCollection: dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollection = { ... }
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems: dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems = { ... }
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources: dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources = { ... }
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct: dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct = { ... }
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties: dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties = { ... }
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails: dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails = { ... }
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails: dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails = { ... }
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails: dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails = { ... }
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails: dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringMetricExtensionsFilterList <a name="DataOciStackMonitoringMetricExtensionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringMetricExtensionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciStackMonitoringMetricExtensionsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>[]

---


### DataOciStackMonitoringMetricExtensionsFilterOutputReference <a name="DataOciStackMonitoringMetricExtensionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciStackMonitoringMetricExtensionsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.computeExpression">computeExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.isDimension">isDimension</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.isHidden">isHidden</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.metricCategory">metricCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeExpression`<sup>Required</sup> <a name="computeExpression" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.computeExpression"></a>

```typescript
public readonly computeExpression: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `isDimension`<sup>Required</sup> <a name="isDimension" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.isDimension"></a>

```typescript
public readonly isDimension: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isHidden`<sup>Required</sup> <a name="isHidden" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.isHidden"></a>

```typescript
public readonly isHidden: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `metricCategory`<sup>Required</sup> <a name="metricCategory" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.metricCategory"></a>

```typescript
public readonly metricCategory: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.collectionMethod">collectionMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.collectionRecurrences">collectionRecurrences</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.enabledOnResources">enabledOnResources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.enabledOnResourcesCount">enabledOnResourcesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.lastUpdatedBy">lastUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.metricList">metricList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.publishTrigger">publishTrigger</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.queryProperties">queryProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.resourceUri">resourceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `collectionMethod`<sup>Required</sup> <a name="collectionMethod" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.collectionMethod"></a>

```typescript
public readonly collectionMethod: string;
```

- *Type:* string

---

##### `collectionRecurrences`<sup>Required</sup> <a name="collectionRecurrences" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.collectionRecurrences"></a>

```typescript
public readonly collectionRecurrences: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enabledOnResources`<sup>Required</sup> <a name="enabledOnResources" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.enabledOnResources"></a>

```typescript
public readonly enabledOnResources: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList</a>

---

##### `enabledOnResourcesCount`<sup>Required</sup> <a name="enabledOnResourcesCount" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.enabledOnResourcesCount"></a>

```typescript
public readonly enabledOnResourcesCount: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedBy`<sup>Required</sup> <a name="lastUpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.lastUpdatedBy"></a>

```typescript
public readonly lastUpdatedBy: string;
```

- *Type:* string

---

##### `metricList`<sup>Required</sup> <a name="metricList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.metricList"></a>

```typescript
public readonly metricList: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publishTrigger`<sup>Required</sup> <a name="publishTrigger" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.publishTrigger"></a>

```typescript
public readonly publishTrigger: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `queryProperties`<sup>Required</sup> <a name="queryProperties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.queryProperties"></a>

```typescript
public readonly queryProperties: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList</a>

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `resourceUri`<sup>Required</sup> <a name="resourceUri" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.resourceUri"></a>

```typescript
public readonly resourceUri: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.inParamPosition">inParamPosition</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.inParamValue">inParamValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inParamPosition`<sup>Required</sup> <a name="inParamPosition" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.inParamPosition"></a>

```typescript
public readonly inParamPosition: number;
```

- *Type:* number

---

##### `inParamValue`<sup>Required</sup> <a name="inParamValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.inParamValue"></a>

```typescript
public readonly inParamValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.outParamPosition">outParamPosition</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.outParamType">outParamType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outParamPosition`<sup>Required</sup> <a name="outParamPosition" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.outParamPosition"></a>

```typescript
public readonly outParamPosition: number;
```

- *Type:* number

---

##### `outParamType`<sup>Required</sup> <a name="outParamType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.outParamType"></a>

```typescript
public readonly outParamType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.arguments">arguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.autoRowPrefix">autoRowPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.collectionMethod">collectionMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.command">command</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.delimiter">delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.identityMetric">identityMetric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.inParamDetails">inParamDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.isMetricServiceEnabled">isMetricServiceEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.jmxAttributes">jmxAttributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.managedBeanQuery">managedBeanQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.outParamDetails">outParamDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.scriptDetails">scriptDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.sqlDetails">sqlDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.sqlType">sqlType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.startsWith">startsWith</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.arguments"></a>

```typescript
public readonly arguments: string;
```

- *Type:* string

---

##### `autoRowPrefix`<sup>Required</sup> <a name="autoRowPrefix" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.autoRowPrefix"></a>

```typescript
public readonly autoRowPrefix: string;
```

- *Type:* string

---

##### `collectionMethod`<sup>Required</sup> <a name="collectionMethod" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.collectionMethod"></a>

```typescript
public readonly collectionMethod: string;
```

- *Type:* string

---

##### `command`<sup>Required</sup> <a name="command" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.delimiter"></a>

```typescript
public readonly delimiter: string;
```

- *Type:* string

---

##### `identityMetric`<sup>Required</sup> <a name="identityMetric" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.identityMetric"></a>

```typescript
public readonly identityMetric: string;
```

- *Type:* string

---

##### `inParamDetails`<sup>Required</sup> <a name="inParamDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.inParamDetails"></a>

```typescript
public readonly inParamDetails: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList</a>

---

##### `isMetricServiceEnabled`<sup>Required</sup> <a name="isMetricServiceEnabled" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.isMetricServiceEnabled"></a>

```typescript
public readonly isMetricServiceEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `jmxAttributes`<sup>Required</sup> <a name="jmxAttributes" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.jmxAttributes"></a>

```typescript
public readonly jmxAttributes: string;
```

- *Type:* string

---

##### `managedBeanQuery`<sup>Required</sup> <a name="managedBeanQuery" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.managedBeanQuery"></a>

```typescript
public readonly managedBeanQuery: string;
```

- *Type:* string

---

##### `outParamDetails`<sup>Required</sup> <a name="outParamDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.outParamDetails"></a>

```typescript
public readonly outParamDetails: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList</a>

---

##### `scriptDetails`<sup>Required</sup> <a name="scriptDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.scriptDetails"></a>

```typescript
public readonly scriptDetails: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList</a>

---

##### `sqlDetails`<sup>Required</sup> <a name="sqlDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.sqlDetails"></a>

```typescript
public readonly sqlDetails: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList</a>

---

##### `sqlType`<sup>Required</sup> <a name="sqlType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.sqlType"></a>

```typescript
public readonly sqlType: string;
```

- *Type:* string

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.startsWith"></a>

```typescript
public readonly startsWith: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.scriptFileName">scriptFileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `scriptFileName`<sup>Required</sup> <a name="scriptFileName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.scriptFileName"></a>

```typescript
public readonly scriptFileName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringMetricExtensions } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollection">DataOciStackMonitoringMetricExtensionsMetricExtensionCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStackMonitoringMetricExtensionsMetricExtensionCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollection">DataOciStackMonitoringMetricExtensionsMetricExtensionCollection</a>

---



