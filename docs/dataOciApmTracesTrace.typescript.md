# `dataOciApmTracesTrace` Submodule <a name="`dataOciApmTracesTrace` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmTracesTrace <a name="DataOciApmTracesTrace" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace oci_apm_traces_trace}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer"></a>

```typescript
import { dataOciApmTracesTrace } from 'rhizo-co-terraform-provider-oci'

new dataOciApmTracesTrace.DataOciApmTracesTrace(scope: Construct, id: string, config: DataOciApmTracesTraceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig">DataOciApmTracesTraceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig">DataOciApmTracesTraceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetTimeTraceStartedGreaterThanOrEqualTo">resetTimeTraceStartedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetTimeTraceStartedLessThan">resetTimeTraceStartedLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetTraceNamespace">resetTraceNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeTraceStartedGreaterThanOrEqualTo` <a name="resetTimeTraceStartedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetTimeTraceStartedGreaterThanOrEqualTo"></a>

```typescript
public resetTimeTraceStartedGreaterThanOrEqualTo(): void
```

##### `resetTimeTraceStartedLessThan` <a name="resetTimeTraceStartedLessThan" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetTimeTraceStartedLessThan"></a>

```typescript
public resetTimeTraceStartedLessThan(): void
```

##### `resetTraceNamespace` <a name="resetTraceNamespace" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetTraceNamespace"></a>

```typescript
public resetTraceNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmTracesTrace resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isConstruct"></a>

```typescript
import { dataOciApmTracesTrace } from 'rhizo-co-terraform-provider-oci'

dataOciApmTracesTrace.DataOciApmTracesTrace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isTerraformElement"></a>

```typescript
import { dataOciApmTracesTrace } from 'rhizo-co-terraform-provider-oci'

dataOciApmTracesTrace.DataOciApmTracesTrace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isTerraformDataSource"></a>

```typescript
import { dataOciApmTracesTrace } from 'rhizo-co-terraform-provider-oci'

dataOciApmTracesTrace.DataOciApmTracesTrace.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.generateConfigForImport"></a>

```typescript
import { dataOciApmTracesTrace } from 'rhizo-co-terraform-provider-oci'

dataOciApmTracesTrace.DataOciApmTracesTrace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciApmTracesTrace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciApmTracesTrace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciApmTracesTrace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmTracesTrace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.errorSpanCount">errorSpanCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.isFault">isFault</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.rootSpanDurationInMs">rootSpanDurationInMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.rootSpanOperationName">rootSpanOperationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.rootSpanServiceName">rootSpanServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.serviceSummaries">serviceSummaries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList">DataOciApmTracesTraceServiceSummariesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.sourceName">sourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.spanCount">spanCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.spans">spans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList">DataOciApmTracesTraceSpansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.spanSummary">spanSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList">DataOciApmTracesTraceSpanSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeEarliestSpanStarted">timeEarliestSpanStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeLatestSpanEnded">timeLatestSpanEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeRootSpanEnded">timeRootSpanEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeRootSpanStarted">timeRootSpanStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceDurationInMs">traceDurationInMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceErrorCode">traceErrorCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceErrorType">traceErrorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceStatus">traceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.apmDomainIdInput">apmDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedGreaterThanOrEqualToInput">timeTraceStartedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedLessThanInput">timeTraceStartedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceKeyInput">traceKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceNamespaceInput">traceNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedGreaterThanOrEqualTo">timeTraceStartedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedLessThan">timeTraceStartedLessThan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceKey">traceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceNamespace">traceNamespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `errorSpanCount`<sup>Required</sup> <a name="errorSpanCount" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.errorSpanCount"></a>

```typescript
public readonly errorSpanCount: number;
```

- *Type:* number

---

##### `isFault`<sup>Required</sup> <a name="isFault" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.isFault"></a>

```typescript
public readonly isFault: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `rootSpanDurationInMs`<sup>Required</sup> <a name="rootSpanDurationInMs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.rootSpanDurationInMs"></a>

```typescript
public readonly rootSpanDurationInMs: number;
```

- *Type:* number

---

##### `rootSpanOperationName`<sup>Required</sup> <a name="rootSpanOperationName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.rootSpanOperationName"></a>

```typescript
public readonly rootSpanOperationName: string;
```

- *Type:* string

---

##### `rootSpanServiceName`<sup>Required</sup> <a name="rootSpanServiceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.rootSpanServiceName"></a>

```typescript
public readonly rootSpanServiceName: string;
```

- *Type:* string

---

##### `serviceSummaries`<sup>Required</sup> <a name="serviceSummaries" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.serviceSummaries"></a>

```typescript
public readonly serviceSummaries: DataOciApmTracesTraceServiceSummariesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList">DataOciApmTracesTraceServiceSummariesList</a>

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

---

##### `spanCount`<sup>Required</sup> <a name="spanCount" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.spanCount"></a>

```typescript
public readonly spanCount: number;
```

- *Type:* number

---

##### `spans`<sup>Required</sup> <a name="spans" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.spans"></a>

```typescript
public readonly spans: DataOciApmTracesTraceSpansList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList">DataOciApmTracesTraceSpansList</a>

---

##### `spanSummary`<sup>Required</sup> <a name="spanSummary" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.spanSummary"></a>

```typescript
public readonly spanSummary: DataOciApmTracesTraceSpanSummaryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList">DataOciApmTracesTraceSpanSummaryList</a>

---

##### `timeEarliestSpanStarted`<sup>Required</sup> <a name="timeEarliestSpanStarted" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeEarliestSpanStarted"></a>

```typescript
public readonly timeEarliestSpanStarted: string;
```

- *Type:* string

---

##### `timeLatestSpanEnded`<sup>Required</sup> <a name="timeLatestSpanEnded" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeLatestSpanEnded"></a>

```typescript
public readonly timeLatestSpanEnded: string;
```

- *Type:* string

---

##### `timeRootSpanEnded`<sup>Required</sup> <a name="timeRootSpanEnded" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeRootSpanEnded"></a>

```typescript
public readonly timeRootSpanEnded: string;
```

- *Type:* string

---

##### `timeRootSpanStarted`<sup>Required</sup> <a name="timeRootSpanStarted" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeRootSpanStarted"></a>

```typescript
public readonly timeRootSpanStarted: string;
```

- *Type:* string

---

##### `traceDurationInMs`<sup>Required</sup> <a name="traceDurationInMs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceDurationInMs"></a>

```typescript
public readonly traceDurationInMs: number;
```

- *Type:* number

---

##### `traceErrorCode`<sup>Required</sup> <a name="traceErrorCode" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceErrorCode"></a>

```typescript
public readonly traceErrorCode: string;
```

- *Type:* string

---

##### `traceErrorType`<sup>Required</sup> <a name="traceErrorType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceErrorType"></a>

```typescript
public readonly traceErrorType: string;
```

- *Type:* string

---

##### `traceStatus`<sup>Required</sup> <a name="traceStatus" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceStatus"></a>

```typescript
public readonly traceStatus: string;
```

- *Type:* string

---

##### `apmDomainIdInput`<sup>Optional</sup> <a name="apmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.apmDomainIdInput"></a>

```typescript
public readonly apmDomainIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeTraceStartedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeTraceStartedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedGreaterThanOrEqualToInput"></a>

```typescript
public readonly timeTraceStartedGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timeTraceStartedLessThanInput`<sup>Optional</sup> <a name="timeTraceStartedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedLessThanInput"></a>

```typescript
public readonly timeTraceStartedLessThanInput: string;
```

- *Type:* string

---

##### `traceKeyInput`<sup>Optional</sup> <a name="traceKeyInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceKeyInput"></a>

```typescript
public readonly traceKeyInput: string;
```

- *Type:* string

---

##### `traceNamespaceInput`<sup>Optional</sup> <a name="traceNamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceNamespaceInput"></a>

```typescript
public readonly traceNamespaceInput: string;
```

- *Type:* string

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `timeTraceStartedGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeTraceStartedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeTraceStartedGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timeTraceStartedLessThan`<sup>Required</sup> <a name="timeTraceStartedLessThan" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedLessThan"></a>

```typescript
public readonly timeTraceStartedLessThan: string;
```

- *Type:* string

---

##### `traceKey`<sup>Required</sup> <a name="traceKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceKey"></a>

```typescript
public readonly traceKey: string;
```

- *Type:* string

---

##### `traceNamespace`<sup>Required</sup> <a name="traceNamespace" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceNamespace"></a>

```typescript
public readonly traceNamespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmTracesTraceConfig <a name="DataOciApmTracesTraceConfig" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.Initializer"></a>

```typescript
import { dataOciApmTracesTrace } from 'rhizo-co-terraform-provider-oci'

const dataOciApmTracesTraceConfig: dataOciApmTracesTrace.DataOciApmTracesTraceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.apmDomainId">apmDomainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#apm_domain_id DataOciApmTracesTrace#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.traceKey">traceKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#trace_key DataOciApmTracesTrace#trace_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#id DataOciApmTracesTrace#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.timeTraceStartedGreaterThanOrEqualTo">timeTraceStartedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#time_trace_started_greater_than_or_equal_to DataOciApmTracesTrace#time_trace_started_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.timeTraceStartedLessThan">timeTraceStartedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#time_trace_started_less_than DataOciApmTracesTrace#time_trace_started_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.traceNamespace">traceNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#trace_namespace DataOciApmTracesTrace#trace_namespace}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apmDomainId`<sup>Required</sup> <a name="apmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.apmDomainId"></a>

```typescript
public readonly apmDomainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#apm_domain_id DataOciApmTracesTrace#apm_domain_id}.

---

##### `traceKey`<sup>Required</sup> <a name="traceKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.traceKey"></a>

```typescript
public readonly traceKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#trace_key DataOciApmTracesTrace#trace_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#id DataOciApmTracesTrace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeTraceStartedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeTraceStartedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.timeTraceStartedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeTraceStartedGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#time_trace_started_greater_than_or_equal_to DataOciApmTracesTrace#time_trace_started_greater_than_or_equal_to}.

---

##### `timeTraceStartedLessThan`<sup>Optional</sup> <a name="timeTraceStartedLessThan" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.timeTraceStartedLessThan"></a>

```typescript
public readonly timeTraceStartedLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#time_trace_started_less_than DataOciApmTracesTrace#time_trace_started_less_than}.

---

##### `traceNamespace`<sup>Optional</sup> <a name="traceNamespace" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.traceNamespace"></a>

```typescript
public readonly traceNamespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#trace_namespace DataOciApmTracesTrace#trace_namespace}.

---

### DataOciApmTracesTraceServiceSummaries <a name="DataOciApmTracesTraceServiceSummaries" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummaries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummaries.Initializer"></a>

```typescript
import { dataOciApmTracesTrace } from 'rhizo-co-terraform-provider-oci'

const dataOciApmTracesTraceServiceSummaries: dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummaries = { ... }
```


### DataOciApmTracesTraceSpans <a name="DataOciApmTracesTraceSpans" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpans.Initializer"></a>

```typescript
import { dataOciApmTracesTrace } from 'rhizo-co-terraform-provider-oci'

const dataOciApmTracesTraceSpans: dataOciApmTracesTrace.DataOciApmTracesTraceSpans = { ... }
```


### DataOciApmTracesTraceSpansLogs <a name="DataOciApmTracesTraceSpansLogs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogs.Initializer"></a>

```typescript
import { dataOciApmTracesTrace } from 'rhizo-co-terraform-provider-oci'

const dataOciApmTracesTraceSpansLogs: dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogs = { ... }
```


### DataOciApmTracesTraceSpansLogsSpanLogs <a name="DataOciApmTracesTraceSpansLogsSpanLogs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogs.Initializer"></a>

```typescript
import { dataOciApmTracesTrace } from 'rhizo-co-terraform-provider-oci'

const dataOciApmTracesTraceSpansLogsSpanLogs: dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogs = { ... }
```


### DataOciApmTracesTraceSpansTags <a name="DataOciApmTracesTraceSpansTags" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTags.Initializer"></a>

```typescript
import { dataOciApmTracesTrace } from 'rhizo-co-terraform-provider-oci'

const dataOciApmTracesTraceSpansTags: dataOciApmTracesTrace.DataOciApmTracesTraceSpansTags = { ... }
```


### DataOciApmTracesTraceSpanSummary <a name="DataOciApmTracesTraceSpanSummary" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummary.Initializer"></a>

```typescript
import { dataOciApmTracesTrace } from 'rhizo-co-terraform-provider-oci'

const dataOciApmTracesTraceSpanSummary: dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummary = { ... }
```


### DataOciApmTracesTraceSpanSummaryServiceSummaries <a name="DataOciApmTracesTraceSpanSummaryServiceSummaries" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummaries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummaries.Initializer"></a>

```typescript
import { dataOciApmTracesTrace } from 'rhizo-co-terraform-provider-oci'

const dataOciApmTracesTraceSpanSummaryServiceSummaries: dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummaries = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmTracesTraceServiceSummariesList <a name="DataOciApmTracesTraceServiceSummariesList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer"></a>

```typescript
import { dataOciApmTracesTrace } from 'rhizo-co-terraform-provider-oci'

new dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.get"></a>

```typescript
public get(index: number): DataOciApmTracesTraceServiceSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmTracesTraceServiceSummariesOutputReference <a name="DataOciApmTracesTraceServiceSummariesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer"></a>

```typescript
import { dataOciApmTracesTrace } from 'rhizo-co-terraform-provider-oci'

new dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.errorSpans">errorSpans</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.spanServiceName">spanServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.totalSpans">totalSpans</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummaries">DataOciApmTracesTraceServiceSummaries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorSpans`<sup>Required</sup> <a name="errorSpans" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.errorSpans"></a>

```typescript
public readonly errorSpans: string;
```

- *Type:* string

---

##### `spanServiceName`<sup>Required</sup> <a name="spanServiceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.spanServiceName"></a>

```typescript
public readonly spanServiceName: string;
```

- *Type:* string

---

##### `totalSpans`<sup>Required</sup> <a name="totalSpans" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.totalSpans"></a>

```typescript
public readonly totalSpans: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmTracesTraceServiceSummaries;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummaries">DataOciApmTracesTraceServiceSummaries</a>

---


### DataOciApmTracesTraceSpansList <a name="DataOciApmTracesTraceSpansList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer"></a>

```typescript
import { dataOciApmTracesTrace } from 'rhizo-co-terraform-provider-oci'

new dataOciApmTracesTrace.DataOciApmTracesTraceSpansList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.get"></a>

```typescript
public get(index: number): DataOciApmTracesTraceSpansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmTracesTraceSpansLogsList <a name="DataOciApmTracesTraceSpansLogsList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer"></a>

```typescript
import { dataOciApmTracesTrace } from 'rhizo-co-terraform-provider-oci'

new dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.get"></a>

```typescript
public get(index: number): DataOciApmTracesTraceSpansLogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmTracesTraceSpansLogsOutputReference <a name="DataOciApmTracesTraceSpansLogsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer"></a>

```typescript
import { dataOciApmTracesTrace } from 'rhizo-co-terraform-provider-oci'

new dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.eventName">eventName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.spanLogs">spanLogs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList">DataOciApmTracesTraceSpansLogsSpanLogsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogs">DataOciApmTracesTraceSpansLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventName`<sup>Required</sup> <a name="eventName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.eventName"></a>

```typescript
public readonly eventName: string;
```

- *Type:* string

---

##### `spanLogs`<sup>Required</sup> <a name="spanLogs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.spanLogs"></a>

```typescript
public readonly spanLogs: DataOciApmTracesTraceSpansLogsSpanLogsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList">DataOciApmTracesTraceSpansLogsSpanLogsList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmTracesTraceSpansLogs;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogs">DataOciApmTracesTraceSpansLogs</a>

---


### DataOciApmTracesTraceSpansLogsSpanLogsList <a name="DataOciApmTracesTraceSpansLogsSpanLogsList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer"></a>

```typescript
import { dataOciApmTracesTrace } from 'rhizo-co-terraform-provider-oci'

new dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.get"></a>

```typescript
public get(index: number): DataOciApmTracesTraceSpansLogsSpanLogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmTracesTraceSpansLogsSpanLogsOutputReference <a name="DataOciApmTracesTraceSpansLogsSpanLogsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer"></a>

```typescript
import { dataOciApmTracesTrace } from 'rhizo-co-terraform-provider-oci'

new dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.logKey">logKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.logValue">logValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogs">DataOciApmTracesTraceSpansLogsSpanLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logKey`<sup>Required</sup> <a name="logKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.logKey"></a>

```typescript
public readonly logKey: string;
```

- *Type:* string

---

##### `logValue`<sup>Required</sup> <a name="logValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.logValue"></a>

```typescript
public readonly logValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmTracesTraceSpansLogsSpanLogs;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogs">DataOciApmTracesTraceSpansLogsSpanLogs</a>

---


### DataOciApmTracesTraceSpansOutputReference <a name="DataOciApmTracesTraceSpansOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer"></a>

```typescript
import { dataOciApmTracesTrace } from 'rhizo-co-terraform-provider-oci'

new dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.durationInMs">durationInMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.isError">isError</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.logs">logs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList">DataOciApmTracesTraceSpansLogsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.operationName">operationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.parentSpanKey">parentSpanKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.sourceName">sourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList">DataOciApmTracesTraceSpansTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.timeEnded">timeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.traceKey">traceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpans">DataOciApmTracesTraceSpans</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInMs`<sup>Required</sup> <a name="durationInMs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.durationInMs"></a>

```typescript
public readonly durationInMs: string;
```

- *Type:* string

---

##### `isError`<sup>Required</sup> <a name="isError" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.isError"></a>

```typescript
public readonly isError: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `logs`<sup>Required</sup> <a name="logs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.logs"></a>

```typescript
public readonly logs: DataOciApmTracesTraceSpansLogsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList">DataOciApmTracesTraceSpansLogsList</a>

---

##### `operationName`<sup>Required</sup> <a name="operationName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.operationName"></a>

```typescript
public readonly operationName: string;
```

- *Type:* string

---

##### `parentSpanKey`<sup>Required</sup> <a name="parentSpanKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.parentSpanKey"></a>

```typescript
public readonly parentSpanKey: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.sourceName"></a>

```typescript
public readonly sourceName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.tags"></a>

```typescript
public readonly tags: DataOciApmTracesTraceSpansTagsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList">DataOciApmTracesTraceSpansTagsList</a>

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `traceKey`<sup>Required</sup> <a name="traceKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.traceKey"></a>

```typescript
public readonly traceKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmTracesTraceSpans;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpans">DataOciApmTracesTraceSpans</a>

---


### DataOciApmTracesTraceSpansTagsList <a name="DataOciApmTracesTraceSpansTagsList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer"></a>

```typescript
import { dataOciApmTracesTrace } from 'rhizo-co-terraform-provider-oci'

new dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.get"></a>

```typescript
public get(index: number): DataOciApmTracesTraceSpansTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmTracesTraceSpansTagsOutputReference <a name="DataOciApmTracesTraceSpansTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer"></a>

```typescript
import { dataOciApmTracesTrace } from 'rhizo-co-terraform-provider-oci'

new dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.tagName">tagName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTags">DataOciApmTracesTraceSpansTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.tagName"></a>

```typescript
public readonly tagName: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmTracesTraceSpansTags;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTags">DataOciApmTracesTraceSpansTags</a>

---


### DataOciApmTracesTraceSpanSummaryList <a name="DataOciApmTracesTraceSpanSummaryList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer"></a>

```typescript
import { dataOciApmTracesTrace } from 'rhizo-co-terraform-provider-oci'

new dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.get"></a>

```typescript
public get(index: number): DataOciApmTracesTraceSpanSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmTracesTraceSpanSummaryOutputReference <a name="DataOciApmTracesTraceSpanSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer"></a>

```typescript
import { dataOciApmTracesTrace } from 'rhizo-co-terraform-provider-oci'

new dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.errorSpanCount">errorSpanCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.isFault">isFault</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.rootSpanDurationInMs">rootSpanDurationInMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.rootSpanOperationName">rootSpanOperationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.rootSpanServiceName">rootSpanServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.serviceSummaries">serviceSummaries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList">DataOciApmTracesTraceSpanSummaryServiceSummariesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.spanCount">spanCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeEarliestSpanStarted">timeEarliestSpanStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeLatestSpanEnded">timeLatestSpanEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeRootSpanEnded">timeRootSpanEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeRootSpanStarted">timeRootSpanStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceDurationInMs">traceDurationInMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceErrorCode">traceErrorCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceErrorType">traceErrorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceStatus">traceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummary">DataOciApmTracesTraceSpanSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorSpanCount`<sup>Required</sup> <a name="errorSpanCount" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.errorSpanCount"></a>

```typescript
public readonly errorSpanCount: number;
```

- *Type:* number

---

##### `isFault`<sup>Required</sup> <a name="isFault" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.isFault"></a>

```typescript
public readonly isFault: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `rootSpanDurationInMs`<sup>Required</sup> <a name="rootSpanDurationInMs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.rootSpanDurationInMs"></a>

```typescript
public readonly rootSpanDurationInMs: number;
```

- *Type:* number

---

##### `rootSpanOperationName`<sup>Required</sup> <a name="rootSpanOperationName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.rootSpanOperationName"></a>

```typescript
public readonly rootSpanOperationName: string;
```

- *Type:* string

---

##### `rootSpanServiceName`<sup>Required</sup> <a name="rootSpanServiceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.rootSpanServiceName"></a>

```typescript
public readonly rootSpanServiceName: string;
```

- *Type:* string

---

##### `serviceSummaries`<sup>Required</sup> <a name="serviceSummaries" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.serviceSummaries"></a>

```typescript
public readonly serviceSummaries: DataOciApmTracesTraceSpanSummaryServiceSummariesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList">DataOciApmTracesTraceSpanSummaryServiceSummariesList</a>

---

##### `spanCount`<sup>Required</sup> <a name="spanCount" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.spanCount"></a>

```typescript
public readonly spanCount: number;
```

- *Type:* number

---

##### `timeEarliestSpanStarted`<sup>Required</sup> <a name="timeEarliestSpanStarted" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeEarliestSpanStarted"></a>

```typescript
public readonly timeEarliestSpanStarted: string;
```

- *Type:* string

---

##### `timeLatestSpanEnded`<sup>Required</sup> <a name="timeLatestSpanEnded" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeLatestSpanEnded"></a>

```typescript
public readonly timeLatestSpanEnded: string;
```

- *Type:* string

---

##### `timeRootSpanEnded`<sup>Required</sup> <a name="timeRootSpanEnded" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeRootSpanEnded"></a>

```typescript
public readonly timeRootSpanEnded: string;
```

- *Type:* string

---

##### `timeRootSpanStarted`<sup>Required</sup> <a name="timeRootSpanStarted" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeRootSpanStarted"></a>

```typescript
public readonly timeRootSpanStarted: string;
```

- *Type:* string

---

##### `traceDurationInMs`<sup>Required</sup> <a name="traceDurationInMs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceDurationInMs"></a>

```typescript
public readonly traceDurationInMs: number;
```

- *Type:* number

---

##### `traceErrorCode`<sup>Required</sup> <a name="traceErrorCode" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceErrorCode"></a>

```typescript
public readonly traceErrorCode: string;
```

- *Type:* string

---

##### `traceErrorType`<sup>Required</sup> <a name="traceErrorType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceErrorType"></a>

```typescript
public readonly traceErrorType: string;
```

- *Type:* string

---

##### `traceStatus`<sup>Required</sup> <a name="traceStatus" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceStatus"></a>

```typescript
public readonly traceStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmTracesTraceSpanSummary;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummary">DataOciApmTracesTraceSpanSummary</a>

---


### DataOciApmTracesTraceSpanSummaryServiceSummariesList <a name="DataOciApmTracesTraceSpanSummaryServiceSummariesList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer"></a>

```typescript
import { dataOciApmTracesTrace } from 'rhizo-co-terraform-provider-oci'

new dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.get"></a>

```typescript
public get(index: number): DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference <a name="DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer"></a>

```typescript
import { dataOciApmTracesTrace } from 'rhizo-co-terraform-provider-oci'

new dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.errorSpans">errorSpans</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.spanServiceName">spanServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.totalSpans">totalSpans</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummaries">DataOciApmTracesTraceSpanSummaryServiceSummaries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorSpans`<sup>Required</sup> <a name="errorSpans" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.errorSpans"></a>

```typescript
public readonly errorSpans: string;
```

- *Type:* string

---

##### `spanServiceName`<sup>Required</sup> <a name="spanServiceName" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.spanServiceName"></a>

```typescript
public readonly spanServiceName: string;
```

- *Type:* string

---

##### `totalSpans`<sup>Required</sup> <a name="totalSpans" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.totalSpans"></a>

```typescript
public readonly totalSpans: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciApmTracesTraceSpanSummaryServiceSummaries;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummaries">DataOciApmTracesTraceSpanSummaryServiceSummaries</a>

---



