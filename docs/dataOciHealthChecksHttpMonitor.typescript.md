# `dataOciHealthChecksHttpMonitor` Submodule <a name="`dataOciHealthChecksHttpMonitor` Submodule" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciHealthChecksHttpMonitor <a name="DataOciHealthChecksHttpMonitor" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitor oci_health_checks_http_monitor}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.Initializer"></a>

```typescript
import { dataOciHealthChecksHttpMonitor } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor(scope: Construct, id: string, config: DataOciHealthChecksHttpMonitorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig">DataOciHealthChecksHttpMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig">DataOciHealthChecksHttpMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciHealthChecksHttpMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.isConstruct"></a>

```typescript
import { dataOciHealthChecksHttpMonitor } from 'rhizo-co-terraform-provider-oci'

dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.isTerraformElement"></a>

```typescript
import { dataOciHealthChecksHttpMonitor } from 'rhizo-co-terraform-provider-oci'

dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.isTerraformDataSource"></a>

```typescript
import { dataOciHealthChecksHttpMonitor } from 'rhizo-co-terraform-provider-oci'

dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.generateConfigForImport"></a>

```typescript
import { dataOciHealthChecksHttpMonitor } from 'rhizo-co-terraform-provider-oci'

dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciHealthChecksHttpMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciHealthChecksHttpMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciHealthChecksHttpMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciHealthChecksHttpMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.headers">headers</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.homeRegion">homeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.intervalInSeconds">intervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.resultsUrl">resultsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.targets">targets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.vantagePointNames">vantagePointNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.monitorIdInput">monitorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.monitorId">monitorId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `headers`<sup>Required</sup> <a name="headers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.headers"></a>

```typescript
public readonly headers: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `homeRegion`<sup>Required</sup> <a name="homeRegion" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.homeRegion"></a>

```typescript
public readonly homeRegion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `intervalInSeconds`<sup>Required</sup> <a name="intervalInSeconds" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.intervalInSeconds"></a>

```typescript
public readonly intervalInSeconds: number;
```

- *Type:* number

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `method`<sup>Required</sup> <a name="method" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `resultsUrl`<sup>Required</sup> <a name="resultsUrl" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.resultsUrl"></a>

```typescript
public readonly resultsUrl: string;
```

- *Type:* string

---

##### `targets`<sup>Required</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.targets"></a>

```typescript
public readonly targets: string[];
```

- *Type:* string[]

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

##### `vantagePointNames`<sup>Required</sup> <a name="vantagePointNames" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.vantagePointNames"></a>

```typescript
public readonly vantagePointNames: string[];
```

- *Type:* string[]

---

##### `monitorIdInput`<sup>Optional</sup> <a name="monitorIdInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.monitorIdInput"></a>

```typescript
public readonly monitorIdInput: string;
```

- *Type:* string

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.monitorId"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitor.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciHealthChecksHttpMonitorConfig <a name="DataOciHealthChecksHttpMonitorConfig" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.Initializer"></a>

```typescript
import { dataOciHealthChecksHttpMonitor } from 'rhizo-co-terraform-provider-oci'

const dataOciHealthChecksHttpMonitorConfig: dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.monitorId">monitorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitor#monitor_id DataOciHealthChecksHttpMonitor#monitor_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpMonitor.DataOciHealthChecksHttpMonitorConfig.property.monitorId"></a>

```typescript
public readonly monitorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_monitor#monitor_id DataOciHealthChecksHttpMonitor#monitor_id}.

---



