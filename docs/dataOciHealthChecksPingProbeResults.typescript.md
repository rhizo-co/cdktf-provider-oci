# `dataOciHealthChecksPingProbeResults` Submodule <a name="`dataOciHealthChecksPingProbeResults` Submodule" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciHealthChecksPingProbeResults <a name="DataOciHealthChecksPingProbeResults" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results oci_health_checks_ping_probe_results}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer"></a>

```typescript
import { dataOciHealthChecksPingProbeResults } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults(scope: Construct, id: string, config: DataOciHealthChecksPingProbeResultsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig">DataOciHealthChecksPingProbeResultsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig">DataOciHealthChecksPingProbeResultsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetStartTimeGreaterThanOrEqualTo">resetStartTimeGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetStartTimeLessThanOrEqualTo">resetStartTimeLessThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciHealthChecksPingProbeResultsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStartTimeGreaterThanOrEqualTo` <a name="resetStartTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetStartTimeGreaterThanOrEqualTo"></a>

```typescript
public resetStartTimeGreaterThanOrEqualTo(): void
```

##### `resetStartTimeLessThanOrEqualTo` <a name="resetStartTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetStartTimeLessThanOrEqualTo"></a>

```typescript
public resetStartTimeLessThanOrEqualTo(): void
```

##### `resetTarget` <a name="resetTarget" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.resetTarget"></a>

```typescript
public resetTarget(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciHealthChecksPingProbeResults resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isConstruct"></a>

```typescript
import { dataOciHealthChecksPingProbeResults } from 'rhizo-co-terraform-provider-oci'

dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformElement"></a>

```typescript
import { dataOciHealthChecksPingProbeResults } from 'rhizo-co-terraform-provider-oci'

dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformDataSource"></a>

```typescript
import { dataOciHealthChecksPingProbeResults } from 'rhizo-co-terraform-provider-oci'

dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport"></a>

```typescript
import { dataOciHealthChecksPingProbeResults } from 'rhizo-co-terraform-provider-oci'

dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciHealthChecksPingProbeResults resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciHealthChecksPingProbeResults to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciHealthChecksPingProbeResults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciHealthChecksPingProbeResults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList">DataOciHealthChecksPingProbeResultsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.pingProbeResults">pingProbeResults</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList">DataOciHealthChecksPingProbeResultsPingProbeResultsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.probeConfigurationIdInput">probeConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeGreaterThanOrEqualToInput">startTimeGreaterThanOrEqualToInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeLessThanOrEqualToInput">startTimeLessThanOrEqualToInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.probeConfigurationId">probeConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeGreaterThanOrEqualTo">startTimeGreaterThanOrEqualTo</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeLessThanOrEqualTo">startTimeLessThanOrEqualTo</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.target">target</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.filter"></a>

```typescript
public readonly filter: DataOciHealthChecksPingProbeResultsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList">DataOciHealthChecksPingProbeResultsFilterList</a>

---

##### `pingProbeResults`<sup>Required</sup> <a name="pingProbeResults" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.pingProbeResults"></a>

```typescript
public readonly pingProbeResults: DataOciHealthChecksPingProbeResultsPingProbeResultsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList">DataOciHealthChecksPingProbeResultsPingProbeResultsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciHealthChecksPingProbeResultsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `probeConfigurationIdInput`<sup>Optional</sup> <a name="probeConfigurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.probeConfigurationIdInput"></a>

```typescript
public readonly probeConfigurationIdInput: string;
```

- *Type:* string

---

##### `startTimeGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="startTimeGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeGreaterThanOrEqualToInput"></a>

```typescript
public readonly startTimeGreaterThanOrEqualToInput: number;
```

- *Type:* number

---

##### `startTimeLessThanOrEqualToInput`<sup>Optional</sup> <a name="startTimeLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeLessThanOrEqualToInput"></a>

```typescript
public readonly startTimeLessThanOrEqualToInput: number;
```

- *Type:* number

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `probeConfigurationId`<sup>Required</sup> <a name="probeConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.probeConfigurationId"></a>

```typescript
public readonly probeConfigurationId: string;
```

- *Type:* string

---

##### `startTimeGreaterThanOrEqualTo`<sup>Required</sup> <a name="startTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeGreaterThanOrEqualTo"></a>

```typescript
public readonly startTimeGreaterThanOrEqualTo: number;
```

- *Type:* number

---

##### `startTimeLessThanOrEqualTo`<sup>Required</sup> <a name="startTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.startTimeLessThanOrEqualTo"></a>

```typescript
public readonly startTimeLessThanOrEqualTo: number;
```

- *Type:* number

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResults.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciHealthChecksPingProbeResultsConfig <a name="DataOciHealthChecksPingProbeResultsConfig" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.Initializer"></a>

```typescript
import { dataOciHealthChecksPingProbeResults } from 'rhizo-co-terraform-provider-oci'

const dataOciHealthChecksPingProbeResultsConfig: dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.probeConfigurationId">probeConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#probe_configuration_id DataOciHealthChecksPingProbeResults#probe_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#id DataOciHealthChecksPingProbeResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.startTimeGreaterThanOrEqualTo">startTimeGreaterThanOrEqualTo</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_greater_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.startTimeLessThanOrEqualTo">startTimeLessThanOrEqualTo</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_less_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#target DataOciHealthChecksPingProbeResults#target}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `probeConfigurationId`<sup>Required</sup> <a name="probeConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.probeConfigurationId"></a>

```typescript
public readonly probeConfigurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#probe_configuration_id DataOciHealthChecksPingProbeResults#probe_configuration_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciHealthChecksPingProbeResultsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#filter DataOciHealthChecksPingProbeResults#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#id DataOciHealthChecksPingProbeResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `startTimeGreaterThanOrEqualTo`<sup>Optional</sup> <a name="startTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.startTimeGreaterThanOrEqualTo"></a>

```typescript
public readonly startTimeGreaterThanOrEqualTo: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_greater_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_greater_than_or_equal_to}.

---

##### `startTimeLessThanOrEqualTo`<sup>Optional</sup> <a name="startTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.startTimeLessThanOrEqualTo"></a>

```typescript
public readonly startTimeLessThanOrEqualTo: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#start_time_less_than_or_equal_to DataOciHealthChecksPingProbeResults#start_time_less_than_or_equal_to}.

---

##### `target`<sup>Optional</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#target DataOciHealthChecksPingProbeResults#target}.

---

### DataOciHealthChecksPingProbeResultsFilter <a name="DataOciHealthChecksPingProbeResultsFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.Initializer"></a>

```typescript
import { dataOciHealthChecksPingProbeResults } from 'rhizo-co-terraform-provider-oci'

const dataOciHealthChecksPingProbeResultsFilter: dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#name DataOciHealthChecksPingProbeResults#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#values DataOciHealthChecksPingProbeResults#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#regex DataOciHealthChecksPingProbeResults#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#name DataOciHealthChecksPingProbeResults#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#values DataOciHealthChecksPingProbeResults#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_ping_probe_results#regex DataOciHealthChecksPingProbeResults#regex}.

---

### DataOciHealthChecksPingProbeResultsPingProbeResults <a name="DataOciHealthChecksPingProbeResultsPingProbeResults" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResults"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResults.Initializer"></a>

```typescript
import { dataOciHealthChecksPingProbeResults } from 'rhizo-co-terraform-provider-oci'

const dataOciHealthChecksPingProbeResultsPingProbeResults: dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResults = { ... }
```


### DataOciHealthChecksPingProbeResultsPingProbeResultsConnection <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsConnection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnection.Initializer"></a>

```typescript
import { dataOciHealthChecksPingProbeResults } from 'rhizo-co-terraform-provider-oci'

const dataOciHealthChecksPingProbeResultsPingProbeResultsConnection: dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnection = { ... }
```


### DataOciHealthChecksPingProbeResultsPingProbeResultsDns <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsDns" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDns.Initializer"></a>

```typescript
import { dataOciHealthChecksPingProbeResults } from 'rhizo-co-terraform-provider-oci'

const dataOciHealthChecksPingProbeResultsPingProbeResultsDns: dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDns = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciHealthChecksPingProbeResultsFilterList <a name="DataOciHealthChecksPingProbeResultsFilterList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer"></a>

```typescript
import { dataOciHealthChecksPingProbeResults } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.get"></a>

```typescript
public get(index: number): DataOciHealthChecksPingProbeResultsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciHealthChecksPingProbeResultsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>[]

---


### DataOciHealthChecksPingProbeResultsFilterOutputReference <a name="DataOciHealthChecksPingProbeResultsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciHealthChecksPingProbeResults } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciHealthChecksPingProbeResultsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsFilter">DataOciHealthChecksPingProbeResultsFilter</a>

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer"></a>

```typescript
import { dataOciHealthChecksPingProbeResults } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.get"></a>

```typescript
public get(index: number): DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer"></a>

```typescript
import { dataOciHealthChecksPingProbeResults } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnection">DataOciHealthChecksPingProbeResultsPingProbeResultsConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciHealthChecksPingProbeResultsPingProbeResultsConnection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnection">DataOciHealthChecksPingProbeResultsPingProbeResultsConnection</a>

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer"></a>

```typescript
import { dataOciHealthChecksPingProbeResults } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.get"></a>

```typescript
public get(index: number): DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer"></a>

```typescript
import { dataOciHealthChecksPingProbeResults } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.addresses">addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.domainLookupDuration">domainLookupDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDns">DataOciHealthChecksPingProbeResultsPingProbeResultsDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.addresses"></a>

```typescript
public readonly addresses: string[];
```

- *Type:* string[]

---

##### `domainLookupDuration`<sup>Required</sup> <a name="domainLookupDuration" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.domainLookupDuration"></a>

```typescript
public readonly domainLookupDuration: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciHealthChecksPingProbeResultsPingProbeResultsDns;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDns">DataOciHealthChecksPingProbeResultsPingProbeResultsDns</a>

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsList <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer"></a>

```typescript
import { dataOciHealthChecksPingProbeResults } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.get"></a>

```typescript
public get(index: number): DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference <a name="DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer"></a>

```typescript
import { dataOciHealthChecksPingProbeResults } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.connection">connection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList">DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.dns">dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList">DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.domainLookupEnd">domainLookupEnd</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.domainLookupStart">domainLookupStart</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.errorCategory">errorCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.icmpCode">icmpCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.isHealthy">isHealthy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.isTimedOut">isTimedOut</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.latencyInMs">latencyInMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.probeConfigurationId">probeConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.startTime">startTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.vantagePointName">vantagePointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResults">DataOciHealthChecksPingProbeResultsPingProbeResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connection`<sup>Required</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.connection"></a>

```typescript
public readonly connection: DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList">DataOciHealthChecksPingProbeResultsPingProbeResultsConnectionList</a>

---

##### `dns`<sup>Required</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.dns"></a>

```typescript
public readonly dns: DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList">DataOciHealthChecksPingProbeResultsPingProbeResultsDnsList</a>

---

##### `domainLookupEnd`<sup>Required</sup> <a name="domainLookupEnd" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.domainLookupEnd"></a>

```typescript
public readonly domainLookupEnd: number;
```

- *Type:* number

---

##### `domainLookupStart`<sup>Required</sup> <a name="domainLookupStart" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.domainLookupStart"></a>

```typescript
public readonly domainLookupStart: number;
```

- *Type:* number

---

##### `errorCategory`<sup>Required</sup> <a name="errorCategory" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.errorCategory"></a>

```typescript
public readonly errorCategory: string;
```

- *Type:* string

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `icmpCode`<sup>Required</sup> <a name="icmpCode" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.icmpCode"></a>

```typescript
public readonly icmpCode: number;
```

- *Type:* number

---

##### `isHealthy`<sup>Required</sup> <a name="isHealthy" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.isHealthy"></a>

```typescript
public readonly isHealthy: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isTimedOut`<sup>Required</sup> <a name="isTimedOut" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.isTimedOut"></a>

```typescript
public readonly isTimedOut: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `latencyInMs`<sup>Required</sup> <a name="latencyInMs" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.latencyInMs"></a>

```typescript
public readonly latencyInMs: number;
```

- *Type:* number

---

##### `probeConfigurationId`<sup>Required</sup> <a name="probeConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.probeConfigurationId"></a>

```typescript
public readonly probeConfigurationId: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.startTime"></a>

```typescript
public readonly startTime: number;
```

- *Type:* number

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `vantagePointName`<sup>Required</sup> <a name="vantagePointName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.vantagePointName"></a>

```typescript
public readonly vantagePointName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciHealthChecksPingProbeResultsPingProbeResults;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksPingProbeResults.DataOciHealthChecksPingProbeResultsPingProbeResults">DataOciHealthChecksPingProbeResultsPingProbeResults</a>

---



