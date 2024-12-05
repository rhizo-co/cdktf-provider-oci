# `dataOciFusionAppsFusionEnvironmentRefreshActivity` Submodule <a name="`dataOciFusionAppsFusionEnvironmentRefreshActivity` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironmentRefreshActivity <a name="DataOciFusionAppsFusionEnvironmentRefreshActivity" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activity oci_fusion_apps_fusion_environment_refresh_activity}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentRefreshActivity } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity(scope: Construct, id: string, config: DataOciFusionAppsFusionEnvironmentRefreshActivityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig">DataOciFusionAppsFusionEnvironmentRefreshActivityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig">DataOciFusionAppsFusionEnvironmentRefreshActivityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentRefreshActivity resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.isConstruct"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentRefreshActivity } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.isTerraformElement"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentRefreshActivity } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.isTerraformDataSource"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentRefreshActivity } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.generateConfigForImport"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentRefreshActivity } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentRefreshActivity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentRefreshActivity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFusionAppsFusionEnvironmentRefreshActivity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentRefreshActivity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.isDataMaskingOpted">isDataMaskingOpted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.refreshIssueDetailsList">refreshIssueDetailsList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList">DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.serviceAvailability">serviceAvailability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.sourceFusionEnvironmentId">sourceFusionEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.timeAccepted">timeAccepted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.timeExpectedFinish">timeExpectedFinish</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.timeOfRestorationPoint">timeOfRestorationPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.fusionEnvironmentIdInput">fusionEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.refreshActivityIdInput">refreshActivityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.refreshActivityId">refreshActivityId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDataMaskingOpted`<sup>Required</sup> <a name="isDataMaskingOpted" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.isDataMaskingOpted"></a>

```typescript
public readonly isDataMaskingOpted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `refreshIssueDetailsList`<sup>Required</sup> <a name="refreshIssueDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.refreshIssueDetailsList"></a>

```typescript
public readonly refreshIssueDetailsList: DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList">DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList</a>

---

##### `serviceAvailability`<sup>Required</sup> <a name="serviceAvailability" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.serviceAvailability"></a>

```typescript
public readonly serviceAvailability: string;
```

- *Type:* string

---

##### `sourceFusionEnvironmentId`<sup>Required</sup> <a name="sourceFusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.sourceFusionEnvironmentId"></a>

```typescript
public readonly sourceFusionEnvironmentId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeAccepted`<sup>Required</sup> <a name="timeAccepted" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.timeAccepted"></a>

```typescript
public readonly timeAccepted: string;
```

- *Type:* string

---

##### `timeExpectedFinish`<sup>Required</sup> <a name="timeExpectedFinish" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.timeExpectedFinish"></a>

```typescript
public readonly timeExpectedFinish: string;
```

- *Type:* string

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeOfRestorationPoint`<sup>Required</sup> <a name="timeOfRestorationPoint" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.timeOfRestorationPoint"></a>

```typescript
public readonly timeOfRestorationPoint: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `fusionEnvironmentIdInput`<sup>Optional</sup> <a name="fusionEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.fusionEnvironmentIdInput"></a>

```typescript
public readonly fusionEnvironmentIdInput: string;
```

- *Type:* string

---

##### `refreshActivityIdInput`<sup>Optional</sup> <a name="refreshActivityIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.refreshActivityIdInput"></a>

```typescript
public readonly refreshActivityIdInput: string;
```

- *Type:* string

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.fusionEnvironmentId"></a>

```typescript
public readonly fusionEnvironmentId: string;
```

- *Type:* string

---

##### `refreshActivityId`<sup>Required</sup> <a name="refreshActivityId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.refreshActivityId"></a>

```typescript
public readonly refreshActivityId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivity.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentRefreshActivityConfig <a name="DataOciFusionAppsFusionEnvironmentRefreshActivityConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentRefreshActivity } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentRefreshActivityConfig: dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activity#fusion_environment_id DataOciFusionAppsFusionEnvironmentRefreshActivity#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.refreshActivityId">refreshActivityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activity#refresh_activity_id DataOciFusionAppsFusionEnvironmentRefreshActivity#refresh_activity_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.fusionEnvironmentId"></a>

```typescript
public readonly fusionEnvironmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activity#fusion_environment_id DataOciFusionAppsFusionEnvironmentRefreshActivity#fusion_environment_id}.

---

##### `refreshActivityId`<sup>Required</sup> <a name="refreshActivityId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityConfig.property.refreshActivityId"></a>

```typescript
public readonly refreshActivityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_refresh_activity#refresh_activity_id DataOciFusionAppsFusionEnvironmentRefreshActivity#refresh_activity_id}.

---

### DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct <a name="DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentRefreshActivity } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct: dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList <a name="DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentRefreshActivity } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.get"></a>

```typescript
public get(index: number): DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference <a name="DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentRefreshActivity } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.refreshIssues">refreshIssues</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct">DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `refreshIssues`<sup>Required</sup> <a name="refreshIssues" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.refreshIssues"></a>

```typescript
public readonly refreshIssues: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentRefreshActivity.DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct">DataOciFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct</a>

---



