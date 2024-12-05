# `dataOciDataSafeDiscoveryJob` Submodule <a name="`dataOciDataSafeDiscoveryJob` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeDiscoveryJob <a name="DataOciDataSafeDiscoveryJob" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_job oci_data_safe_discovery_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob(scope: Construct, id: string, config: DataOciDataSafeDiscoveryJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobConfig">DataOciDataSafeDiscoveryJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobConfig">DataOciDataSafeDiscoveryJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeDiscoveryJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.isConstruct"></a>

```typescript
import { dataOciDataSafeDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.isTerraformElement"></a>

```typescript
import { dataOciDataSafeDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeDiscoveryJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeDiscoveryJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeDiscoveryJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeDiscoveryJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.discoveryType">discoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.isAppDefinedRelationDiscoveryEnabled">isAppDefinedRelationDiscoveryEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.isIncludeAllSchemas">isIncludeAllSchemas</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.isIncludeAllSensitiveTypes">isIncludeAllSensitiveTypes</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.isSampleDataCollectionEnabled">isSampleDataCollectionEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.schemasForDiscovery">schemasForDiscovery</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.sensitiveDataModelId">sensitiveDataModelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.sensitiveTypeIdsForDiscovery">sensitiveTypeIdsForDiscovery</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.tablesForDiscovery">tablesForDiscovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList">DataOciDataSafeDiscoveryJobTablesForDiscoveryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.totalColumnsScanned">totalColumnsScanned</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.totalDeletedSensitiveColumns">totalDeletedSensitiveColumns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.totalModifiedSensitiveColumns">totalModifiedSensitiveColumns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.totalNewSensitiveColumns">totalNewSensitiveColumns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.totalObjectsScanned">totalObjectsScanned</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.totalSchemasScanned">totalSchemasScanned</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.discoveryJobIdInput">discoveryJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.discoveryJobId">discoveryJobId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `discoveryType`<sup>Required</sup> <a name="discoveryType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.discoveryType"></a>

```typescript
public readonly discoveryType: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAppDefinedRelationDiscoveryEnabled`<sup>Required</sup> <a name="isAppDefinedRelationDiscoveryEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.isAppDefinedRelationDiscoveryEnabled"></a>

```typescript
public readonly isAppDefinedRelationDiscoveryEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isIncludeAllSchemas`<sup>Required</sup> <a name="isIncludeAllSchemas" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.isIncludeAllSchemas"></a>

```typescript
public readonly isIncludeAllSchemas: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isIncludeAllSensitiveTypes`<sup>Required</sup> <a name="isIncludeAllSensitiveTypes" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.isIncludeAllSensitiveTypes"></a>

```typescript
public readonly isIncludeAllSensitiveTypes: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isSampleDataCollectionEnabled`<sup>Required</sup> <a name="isSampleDataCollectionEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.isSampleDataCollectionEnabled"></a>

```typescript
public readonly isSampleDataCollectionEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `schemasForDiscovery`<sup>Required</sup> <a name="schemasForDiscovery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.schemasForDiscovery"></a>

```typescript
public readonly schemasForDiscovery: string[];
```

- *Type:* string[]

---

##### `sensitiveDataModelId`<sup>Required</sup> <a name="sensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.sensitiveDataModelId"></a>

```typescript
public readonly sensitiveDataModelId: string;
```

- *Type:* string

---

##### `sensitiveTypeIdsForDiscovery`<sup>Required</sup> <a name="sensitiveTypeIdsForDiscovery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.sensitiveTypeIdsForDiscovery"></a>

```typescript
public readonly sensitiveTypeIdsForDiscovery: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `tablesForDiscovery`<sup>Required</sup> <a name="tablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.tablesForDiscovery"></a>

```typescript
public readonly tablesForDiscovery: DataOciDataSafeDiscoveryJobTablesForDiscoveryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList">DataOciDataSafeDiscoveryJobTablesForDiscoveryList</a>

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `totalColumnsScanned`<sup>Required</sup> <a name="totalColumnsScanned" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.totalColumnsScanned"></a>

```typescript
public readonly totalColumnsScanned: string;
```

- *Type:* string

---

##### `totalDeletedSensitiveColumns`<sup>Required</sup> <a name="totalDeletedSensitiveColumns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.totalDeletedSensitiveColumns"></a>

```typescript
public readonly totalDeletedSensitiveColumns: string;
```

- *Type:* string

---

##### `totalModifiedSensitiveColumns`<sup>Required</sup> <a name="totalModifiedSensitiveColumns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.totalModifiedSensitiveColumns"></a>

```typescript
public readonly totalModifiedSensitiveColumns: string;
```

- *Type:* string

---

##### `totalNewSensitiveColumns`<sup>Required</sup> <a name="totalNewSensitiveColumns" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.totalNewSensitiveColumns"></a>

```typescript
public readonly totalNewSensitiveColumns: string;
```

- *Type:* string

---

##### `totalObjectsScanned`<sup>Required</sup> <a name="totalObjectsScanned" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.totalObjectsScanned"></a>

```typescript
public readonly totalObjectsScanned: string;
```

- *Type:* string

---

##### `totalSchemasScanned`<sup>Required</sup> <a name="totalSchemasScanned" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.totalSchemasScanned"></a>

```typescript
public readonly totalSchemasScanned: string;
```

- *Type:* string

---

##### `discoveryJobIdInput`<sup>Optional</sup> <a name="discoveryJobIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.discoveryJobIdInput"></a>

```typescript
public readonly discoveryJobIdInput: string;
```

- *Type:* string

---

##### `discoveryJobId`<sup>Required</sup> <a name="discoveryJobId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.discoveryJobId"></a>

```typescript
public readonly discoveryJobId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeDiscoveryJobConfig <a name="DataOciDataSafeDiscoveryJobConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobConfig.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeDiscoveryJobConfig: dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobConfig.property.discoveryJobId">discoveryJobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_job#discovery_job_id DataOciDataSafeDiscoveryJob#discovery_job_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `discoveryJobId`<sup>Required</sup> <a name="discoveryJobId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobConfig.property.discoveryJobId"></a>

```typescript
public readonly discoveryJobId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_job#discovery_job_id DataOciDataSafeDiscoveryJob#discovery_job_id}.

---

### DataOciDataSafeDiscoveryJobTablesForDiscovery <a name="DataOciDataSafeDiscoveryJobTablesForDiscovery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscovery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscovery.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeDiscoveryJobTablesForDiscovery: dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscovery = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeDiscoveryJobTablesForDiscoveryList <a name="DataOciDataSafeDiscoveryJobTablesForDiscoveryList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList.get"></a>

```typescript
public get(index: number): DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference <a name="DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryJob } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.tableNames">tableNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscovery">DataOciDataSafeDiscoveryJobTablesForDiscovery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tableNames`<sup>Required</sup> <a name="tableNames" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.tableNames"></a>

```typescript
public readonly tableNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscoveryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeDiscoveryJobTablesForDiscovery;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJob.DataOciDataSafeDiscoveryJobTablesForDiscovery">DataOciDataSafeDiscoveryJobTablesForDiscovery</a>

---



