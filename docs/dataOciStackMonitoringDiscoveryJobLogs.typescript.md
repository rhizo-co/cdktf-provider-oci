# `dataOciStackMonitoringDiscoveryJobLogs` Submodule <a name="`dataOciStackMonitoringDiscoveryJobLogs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringDiscoveryJobLogs <a name="DataOciStackMonitoringDiscoveryJobLogs" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs oci_stack_monitoring_discovery_job_logs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJobLogs } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs(scope: Construct, id: string, config: DataOciStackMonitoringDiscoveryJobLogsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig">DataOciStackMonitoringDiscoveryJobLogsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig">DataOciStackMonitoringDiscoveryJobLogsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.resetLogType">resetLogType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciStackMonitoringDiscoveryJobLogsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter">DataOciStackMonitoringDiscoveryJobLogsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogType` <a name="resetLogType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.resetLogType"></a>

```typescript
public resetLogType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringDiscoveryJobLogs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.isConstruct"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJobLogs } from 'rhizo-co-terraform-provider-oci'

dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.isTerraformElement"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJobLogs } from 'rhizo-co-terraform-provider-oci'

dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.isTerraformDataSource"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJobLogs } from 'rhizo-co-terraform-provider-oci'

dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.generateConfigForImport"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJobLogs } from 'rhizo-co-terraform-provider-oci'

dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciStackMonitoringDiscoveryJobLogs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciStackMonitoringDiscoveryJobLogs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciStackMonitoringDiscoveryJobLogs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringDiscoveryJobLogs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.discoveryJobLogCollection">discoveryJobLogCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList">DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList">DataOciStackMonitoringDiscoveryJobLogsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.discoveryJobIdInput">discoveryJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter">DataOciStackMonitoringDiscoveryJobLogsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.logTypeInput">logTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.discoveryJobId">discoveryJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.logType">logType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `discoveryJobLogCollection`<sup>Required</sup> <a name="discoveryJobLogCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.discoveryJobLogCollection"></a>

```typescript
public readonly discoveryJobLogCollection: DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList">DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.filter"></a>

```typescript
public readonly filter: DataOciStackMonitoringDiscoveryJobLogsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList">DataOciStackMonitoringDiscoveryJobLogsFilterList</a>

---

##### `discoveryJobIdInput`<sup>Optional</sup> <a name="discoveryJobIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.discoveryJobIdInput"></a>

```typescript
public readonly discoveryJobIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciStackMonitoringDiscoveryJobLogsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter">DataOciStackMonitoringDiscoveryJobLogsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.logTypeInput"></a>

```typescript
public readonly logTypeInput: string;
```

- *Type:* string

---

##### `discoveryJobId`<sup>Required</sup> <a name="discoveryJobId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.discoveryJobId"></a>

```typescript
public readonly discoveryJobId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logType`<sup>Required</sup> <a name="logType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogs.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringDiscoveryJobLogsConfig <a name="DataOciStackMonitoringDiscoveryJobLogsConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJobLogs } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringDiscoveryJobLogsConfig: dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.discoveryJobId">discoveryJobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#discovery_job_id DataOciStackMonitoringDiscoveryJobLogs#discovery_job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter">DataOciStackMonitoringDiscoveryJobLogsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#id DataOciStackMonitoringDiscoveryJobLogs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.logType">logType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#log_type DataOciStackMonitoringDiscoveryJobLogs#log_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `discoveryJobId`<sup>Required</sup> <a name="discoveryJobId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.discoveryJobId"></a>

```typescript
public readonly discoveryJobId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#discovery_job_id DataOciStackMonitoringDiscoveryJobLogs#discovery_job_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciStackMonitoringDiscoveryJobLogsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter">DataOciStackMonitoringDiscoveryJobLogsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#filter DataOciStackMonitoringDiscoveryJobLogs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#id DataOciStackMonitoringDiscoveryJobLogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logType`<sup>Optional</sup> <a name="logType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsConfig.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#log_type DataOciStackMonitoringDiscoveryJobLogs#log_type}.

---

### DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollection <a name="DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollection.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJobLogs } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollection: dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollection = { ... }
```


### DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItems <a name="DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItems.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJobLogs } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItems: dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItems = { ... }
```


### DataOciStackMonitoringDiscoveryJobLogsFilter <a name="DataOciStackMonitoringDiscoveryJobLogsFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJobLogs } from 'rhizo-co-terraform-provider-oci'

const dataOciStackMonitoringDiscoveryJobLogsFilter: dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#name DataOciStackMonitoringDiscoveryJobLogs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#values DataOciStackMonitoringDiscoveryJobLogs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#regex DataOciStackMonitoringDiscoveryJobLogs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#name DataOciStackMonitoringDiscoveryJobLogs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#values DataOciStackMonitoringDiscoveryJobLogs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_discovery_job_logs#regex DataOciStackMonitoringDiscoveryJobLogs#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList <a name="DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJobLogs } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference <a name="DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJobLogs } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.logMessage">logMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.logType">logType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItems">DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logMessage`<sup>Required</sup> <a name="logMessage" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.logMessage"></a>

```typescript
public readonly logMessage: string;
```

- *Type:* string

---

##### `logType`<sup>Required</sup> <a name="logType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItems">DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItems</a>

---


### DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList <a name="DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJobLogs } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference <a name="DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJobLogs } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList">DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollection">DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList">DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollection">DataOciStackMonitoringDiscoveryJobLogsDiscoveryJobLogCollection</a>

---


### DataOciStackMonitoringDiscoveryJobLogsFilterList <a name="DataOciStackMonitoringDiscoveryJobLogsFilterList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJobLogs } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.get"></a>

```typescript
public get(index: number): DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter">DataOciStackMonitoringDiscoveryJobLogsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciStackMonitoringDiscoveryJobLogsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter">DataOciStackMonitoringDiscoveryJobLogsFilter</a>[]

---


### DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference <a name="DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciStackMonitoringDiscoveryJobLogs } from 'rhizo-co-terraform-provider-oci'

new dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter">DataOciStackMonitoringDiscoveryJobLogsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciStackMonitoringDiscoveryJobLogsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringDiscoveryJobLogs.DataOciStackMonitoringDiscoveryJobLogsFilter">DataOciStackMonitoringDiscoveryJobLogsFilter</a>

---



