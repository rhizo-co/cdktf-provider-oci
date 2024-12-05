# `dataOciHealthChecksHttpProbeResults` Submodule <a name="`dataOciHealthChecksHttpProbeResults` Submodule" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciHealthChecksHttpProbeResults <a name="DataOciHealthChecksHttpProbeResults" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results oci_health_checks_http_probe_results}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer"></a>

```typescript
import { dataOciHealthChecksHttpProbeResults } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults(scope: Construct, id: string, config: DataOciHealthChecksHttpProbeResultsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig">DataOciHealthChecksHttpProbeResultsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig">DataOciHealthChecksHttpProbeResultsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetStartTimeGreaterThanOrEqualTo">resetStartTimeGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetStartTimeLessThanOrEqualTo">resetStartTimeLessThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciHealthChecksHttpProbeResultsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStartTimeGreaterThanOrEqualTo` <a name="resetStartTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetStartTimeGreaterThanOrEqualTo"></a>

```typescript
public resetStartTimeGreaterThanOrEqualTo(): void
```

##### `resetStartTimeLessThanOrEqualTo` <a name="resetStartTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetStartTimeLessThanOrEqualTo"></a>

```typescript
public resetStartTimeLessThanOrEqualTo(): void
```

##### `resetTarget` <a name="resetTarget" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.resetTarget"></a>

```typescript
public resetTarget(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciHealthChecksHttpProbeResults resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isConstruct"></a>

```typescript
import { dataOciHealthChecksHttpProbeResults } from 'rhizo-co-terraform-provider-oci'

dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isTerraformElement"></a>

```typescript
import { dataOciHealthChecksHttpProbeResults } from 'rhizo-co-terraform-provider-oci'

dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isTerraformDataSource"></a>

```typescript
import { dataOciHealthChecksHttpProbeResults } from 'rhizo-co-terraform-provider-oci'

dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.generateConfigForImport"></a>

```typescript
import { dataOciHealthChecksHttpProbeResults } from 'rhizo-co-terraform-provider-oci'

dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciHealthChecksHttpProbeResults resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciHealthChecksHttpProbeResults to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciHealthChecksHttpProbeResults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciHealthChecksHttpProbeResults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList">DataOciHealthChecksHttpProbeResultsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.httpProbeResults">httpProbeResults</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList">DataOciHealthChecksHttpProbeResultsHttpProbeResultsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.probeConfigurationIdInput">probeConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.startTimeGreaterThanOrEqualToInput">startTimeGreaterThanOrEqualToInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.startTimeLessThanOrEqualToInput">startTimeLessThanOrEqualToInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.probeConfigurationId">probeConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.startTimeGreaterThanOrEqualTo">startTimeGreaterThanOrEqualTo</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.startTimeLessThanOrEqualTo">startTimeLessThanOrEqualTo</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.target">target</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.filter"></a>

```typescript
public readonly filter: DataOciHealthChecksHttpProbeResultsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList">DataOciHealthChecksHttpProbeResultsFilterList</a>

---

##### `httpProbeResults`<sup>Required</sup> <a name="httpProbeResults" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.httpProbeResults"></a>

```typescript
public readonly httpProbeResults: DataOciHealthChecksHttpProbeResultsHttpProbeResultsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList">DataOciHealthChecksHttpProbeResultsHttpProbeResultsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciHealthChecksHttpProbeResultsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `probeConfigurationIdInput`<sup>Optional</sup> <a name="probeConfigurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.probeConfigurationIdInput"></a>

```typescript
public readonly probeConfigurationIdInput: string;
```

- *Type:* string

---

##### `startTimeGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="startTimeGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.startTimeGreaterThanOrEqualToInput"></a>

```typescript
public readonly startTimeGreaterThanOrEqualToInput: number;
```

- *Type:* number

---

##### `startTimeLessThanOrEqualToInput`<sup>Optional</sup> <a name="startTimeLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.startTimeLessThanOrEqualToInput"></a>

```typescript
public readonly startTimeLessThanOrEqualToInput: number;
```

- *Type:* number

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `probeConfigurationId`<sup>Required</sup> <a name="probeConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.probeConfigurationId"></a>

```typescript
public readonly probeConfigurationId: string;
```

- *Type:* string

---

##### `startTimeGreaterThanOrEqualTo`<sup>Required</sup> <a name="startTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.startTimeGreaterThanOrEqualTo"></a>

```typescript
public readonly startTimeGreaterThanOrEqualTo: number;
```

- *Type:* number

---

##### `startTimeLessThanOrEqualTo`<sup>Required</sup> <a name="startTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.startTimeLessThanOrEqualTo"></a>

```typescript
public readonly startTimeLessThanOrEqualTo: number;
```

- *Type:* number

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResults.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciHealthChecksHttpProbeResultsConfig <a name="DataOciHealthChecksHttpProbeResultsConfig" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.Initializer"></a>

```typescript
import { dataOciHealthChecksHttpProbeResults } from 'rhizo-co-terraform-provider-oci'

const dataOciHealthChecksHttpProbeResultsConfig: dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.probeConfigurationId">probeConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#probe_configuration_id DataOciHealthChecksHttpProbeResults#probe_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#id DataOciHealthChecksHttpProbeResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.startTimeGreaterThanOrEqualTo">startTimeGreaterThanOrEqualTo</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#start_time_greater_than_or_equal_to DataOciHealthChecksHttpProbeResults#start_time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.startTimeLessThanOrEqualTo">startTimeLessThanOrEqualTo</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#start_time_less_than_or_equal_to DataOciHealthChecksHttpProbeResults#start_time_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#target DataOciHealthChecksHttpProbeResults#target}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `probeConfigurationId`<sup>Required</sup> <a name="probeConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.probeConfigurationId"></a>

```typescript
public readonly probeConfigurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#probe_configuration_id DataOciHealthChecksHttpProbeResults#probe_configuration_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciHealthChecksHttpProbeResultsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#filter DataOciHealthChecksHttpProbeResults#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#id DataOciHealthChecksHttpProbeResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `startTimeGreaterThanOrEqualTo`<sup>Optional</sup> <a name="startTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.startTimeGreaterThanOrEqualTo"></a>

```typescript
public readonly startTimeGreaterThanOrEqualTo: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#start_time_greater_than_or_equal_to DataOciHealthChecksHttpProbeResults#start_time_greater_than_or_equal_to}.

---

##### `startTimeLessThanOrEqualTo`<sup>Optional</sup> <a name="startTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.startTimeLessThanOrEqualTo"></a>

```typescript
public readonly startTimeLessThanOrEqualTo: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#start_time_less_than_or_equal_to DataOciHealthChecksHttpProbeResults#start_time_less_than_or_equal_to}.

---

##### `target`<sup>Optional</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsConfig.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#target DataOciHealthChecksHttpProbeResults#target}.

---

### DataOciHealthChecksHttpProbeResultsFilter <a name="DataOciHealthChecksHttpProbeResultsFilter" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter.Initializer"></a>

```typescript
import { dataOciHealthChecksHttpProbeResults } from 'rhizo-co-terraform-provider-oci'

const dataOciHealthChecksHttpProbeResultsFilter: dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#name DataOciHealthChecksHttpProbeResults#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#values DataOciHealthChecksHttpProbeResults#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#regex DataOciHealthChecksHttpProbeResults#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#name DataOciHealthChecksHttpProbeResults#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#values DataOciHealthChecksHttpProbeResults#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/health_checks_http_probe_results#regex DataOciHealthChecksHttpProbeResults#regex}.

---

### DataOciHealthChecksHttpProbeResultsHttpProbeResults <a name="DataOciHealthChecksHttpProbeResultsHttpProbeResults" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResults"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResults.Initializer"></a>

```typescript
import { dataOciHealthChecksHttpProbeResults } from 'rhizo-co-terraform-provider-oci'

const dataOciHealthChecksHttpProbeResultsHttpProbeResults: dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResults = { ... }
```


### DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection <a name="DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection.Initializer"></a>

```typescript
import { dataOciHealthChecksHttpProbeResults } from 'rhizo-co-terraform-provider-oci'

const dataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection: dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection = { ... }
```


### DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns <a name="DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns.Initializer"></a>

```typescript
import { dataOciHealthChecksHttpProbeResults } from 'rhizo-co-terraform-provider-oci'

const dataOciHealthChecksHttpProbeResultsHttpProbeResultsDns: dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciHealthChecksHttpProbeResultsFilterList <a name="DataOciHealthChecksHttpProbeResultsFilterList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.Initializer"></a>

```typescript
import { dataOciHealthChecksHttpProbeResults } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.get"></a>

```typescript
public get(index: number): DataOciHealthChecksHttpProbeResultsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciHealthChecksHttpProbeResultsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>[]

---


### DataOciHealthChecksHttpProbeResultsFilterOutputReference <a name="DataOciHealthChecksHttpProbeResultsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciHealthChecksHttpProbeResults } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciHealthChecksHttpProbeResultsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsFilter">DataOciHealthChecksHttpProbeResultsFilter</a>

---


### DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList <a name="DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.Initializer"></a>

```typescript
import { dataOciHealthChecksHttpProbeResults } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.get"></a>

```typescript
public get(index: number): DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference <a name="DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.Initializer"></a>

```typescript
import { dataOciHealthChecksHttpProbeResults } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.connectDuration">connectDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.secureConnectDuration">secureConnectDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection">DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `connectDuration`<sup>Required</sup> <a name="connectDuration" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.connectDuration"></a>

```typescript
public readonly connectDuration: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `secureConnectDuration`<sup>Required</sup> <a name="secureConnectDuration" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.secureConnectDuration"></a>

```typescript
public readonly secureConnectDuration: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection">DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnection</a>

---


### DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList <a name="DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.Initializer"></a>

```typescript
import { dataOciHealthChecksHttpProbeResults } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.get"></a>

```typescript
public get(index: number): DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference <a name="DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.Initializer"></a>

```typescript
import { dataOciHealthChecksHttpProbeResults } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.addresses">addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.domainLookupDuration">domainLookupDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns">DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.addresses"></a>

```typescript
public readonly addresses: string[];
```

- *Type:* string[]

---

##### `domainLookupDuration`<sup>Required</sup> <a name="domainLookupDuration" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.domainLookupDuration"></a>

```typescript
public readonly domainLookupDuration: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns">DataOciHealthChecksHttpProbeResultsHttpProbeResultsDns</a>

---


### DataOciHealthChecksHttpProbeResultsHttpProbeResultsList <a name="DataOciHealthChecksHttpProbeResultsHttpProbeResultsList" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.Initializer"></a>

```typescript
import { dataOciHealthChecksHttpProbeResults } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.get"></a>

```typescript
public get(index: number): DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference <a name="DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.Initializer"></a>

```typescript
import { dataOciHealthChecksHttpProbeResults } from 'rhizo-co-terraform-provider-oci'

new dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.connectEnd">connectEnd</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.connection">connection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList">DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.connectStart">connectStart</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.dns">dns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList">DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.domainLookupEnd">domainLookupEnd</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.domainLookupStart">domainLookupStart</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.duration">duration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.encodedBodySize">encodedBodySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.errorCategory">errorCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.fetchStart">fetchStart</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.isHealthy">isHealthy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.isTimedOut">isTimedOut</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.probeConfigurationId">probeConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.requestStart">requestStart</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.responseEnd">responseEnd</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.responseStart">responseStart</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.secureConnectionStart">secureConnectionStart</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.startTime">startTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.statusCode">statusCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.vantagePointName">vantagePointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResults">DataOciHealthChecksHttpProbeResultsHttpProbeResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectEnd`<sup>Required</sup> <a name="connectEnd" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.connectEnd"></a>

```typescript
public readonly connectEnd: number;
```

- *Type:* number

---

##### `connection`<sup>Required</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.connection"></a>

```typescript
public readonly connection: DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList">DataOciHealthChecksHttpProbeResultsHttpProbeResultsConnectionList</a>

---

##### `connectStart`<sup>Required</sup> <a name="connectStart" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.connectStart"></a>

```typescript
public readonly connectStart: number;
```

- *Type:* number

---

##### `dns`<sup>Required</sup> <a name="dns" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.dns"></a>

```typescript
public readonly dns: DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList">DataOciHealthChecksHttpProbeResultsHttpProbeResultsDnsList</a>

---

##### `domainLookupEnd`<sup>Required</sup> <a name="domainLookupEnd" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.domainLookupEnd"></a>

```typescript
public readonly domainLookupEnd: number;
```

- *Type:* number

---

##### `domainLookupStart`<sup>Required</sup> <a name="domainLookupStart" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.domainLookupStart"></a>

```typescript
public readonly domainLookupStart: number;
```

- *Type:* number

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.duration"></a>

```typescript
public readonly duration: number;
```

- *Type:* number

---

##### `encodedBodySize`<sup>Required</sup> <a name="encodedBodySize" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.encodedBodySize"></a>

```typescript
public readonly encodedBodySize: number;
```

- *Type:* number

---

##### `errorCategory`<sup>Required</sup> <a name="errorCategory" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.errorCategory"></a>

```typescript
public readonly errorCategory: string;
```

- *Type:* string

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `fetchStart`<sup>Required</sup> <a name="fetchStart" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.fetchStart"></a>

```typescript
public readonly fetchStart: number;
```

- *Type:* number

---

##### `isHealthy`<sup>Required</sup> <a name="isHealthy" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.isHealthy"></a>

```typescript
public readonly isHealthy: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isTimedOut`<sup>Required</sup> <a name="isTimedOut" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.isTimedOut"></a>

```typescript
public readonly isTimedOut: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `probeConfigurationId`<sup>Required</sup> <a name="probeConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.probeConfigurationId"></a>

```typescript
public readonly probeConfigurationId: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `requestStart`<sup>Required</sup> <a name="requestStart" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.requestStart"></a>

```typescript
public readonly requestStart: number;
```

- *Type:* number

---

##### `responseEnd`<sup>Required</sup> <a name="responseEnd" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.responseEnd"></a>

```typescript
public readonly responseEnd: number;
```

- *Type:* number

---

##### `responseStart`<sup>Required</sup> <a name="responseStart" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.responseStart"></a>

```typescript
public readonly responseStart: number;
```

- *Type:* number

---

##### `secureConnectionStart`<sup>Required</sup> <a name="secureConnectionStart" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.secureConnectionStart"></a>

```typescript
public readonly secureConnectionStart: number;
```

- *Type:* number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.startTime"></a>

```typescript
public readonly startTime: number;
```

- *Type:* number

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: number;
```

- *Type:* number

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `vantagePointName`<sup>Required</sup> <a name="vantagePointName" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.vantagePointName"></a>

```typescript
public readonly vantagePointName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciHealthChecksHttpProbeResultsHttpProbeResults;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciHealthChecksHttpProbeResults.DataOciHealthChecksHttpProbeResultsHttpProbeResults">DataOciHealthChecksHttpProbeResultsHttpProbeResults</a>

---



