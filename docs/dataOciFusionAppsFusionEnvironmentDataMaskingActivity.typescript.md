# `dataOciFusionAppsFusionEnvironmentDataMaskingActivity` Submodule <a name="`dataOciFusionAppsFusionEnvironmentDataMaskingActivity` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironmentDataMaskingActivity <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivity" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activity oci_fusion_apps_fusion_environment_data_masking_activity}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentDataMaskingActivity } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity(scope: Construct, id: string, config: DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig">DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig">DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentDataMaskingActivity resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isConstruct"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentDataMaskingActivity } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isTerraformElement"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentDataMaskingActivity } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isTerraformDataSource"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentDataMaskingActivity } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentDataMaskingActivity } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentDataMaskingActivity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentDataMaskingActivity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFusionAppsFusionEnvironmentDataMaskingActivity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentDataMaskingActivity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.isResumeDataMasking">isResumeDataMasking</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.timeMaskingFinish">timeMaskingFinish</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.timeMaskingStart">timeMaskingStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.dataMaskingActivityIdInput">dataMaskingActivityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.fusionEnvironmentIdInput">fusionEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.dataMaskingActivityId">dataMaskingActivityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isResumeDataMasking`<sup>Required</sup> <a name="isResumeDataMasking" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.isResumeDataMasking"></a>

```typescript
public readonly isResumeDataMasking: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeMaskingFinish`<sup>Required</sup> <a name="timeMaskingFinish" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.timeMaskingFinish"></a>

```typescript
public readonly timeMaskingFinish: string;
```

- *Type:* string

---

##### `timeMaskingStart`<sup>Required</sup> <a name="timeMaskingStart" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.timeMaskingStart"></a>

```typescript
public readonly timeMaskingStart: string;
```

- *Type:* string

---

##### `dataMaskingActivityIdInput`<sup>Optional</sup> <a name="dataMaskingActivityIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.dataMaskingActivityIdInput"></a>

```typescript
public readonly dataMaskingActivityIdInput: string;
```

- *Type:* string

---

##### `fusionEnvironmentIdInput`<sup>Optional</sup> <a name="fusionEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.fusionEnvironmentIdInput"></a>

```typescript
public readonly fusionEnvironmentIdInput: string;
```

- *Type:* string

---

##### `dataMaskingActivityId`<sup>Required</sup> <a name="dataMaskingActivityId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.dataMaskingActivityId"></a>

```typescript
public readonly dataMaskingActivityId: string;
```

- *Type:* string

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.fusionEnvironmentId"></a>

```typescript
public readonly fusionEnvironmentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivity.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig <a name="DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentDataMaskingActivity } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig: dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.dataMaskingActivityId">dataMaskingActivityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activity#data_masking_activity_id DataOciFusionAppsFusionEnvironmentDataMaskingActivity#data_masking_activity_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activity#fusion_environment_id DataOciFusionAppsFusionEnvironmentDataMaskingActivity#fusion_environment_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataMaskingActivityId`<sup>Required</sup> <a name="dataMaskingActivityId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.dataMaskingActivityId"></a>

```typescript
public readonly dataMaskingActivityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activity#data_masking_activity_id DataOciFusionAppsFusionEnvironmentDataMaskingActivity#data_masking_activity_id}.

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentDataMaskingActivity.DataOciFusionAppsFusionEnvironmentDataMaskingActivityConfig.property.fusionEnvironmentId"></a>

```typescript
public readonly fusionEnvironmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_data_masking_activity#fusion_environment_id DataOciFusionAppsFusionEnvironmentDataMaskingActivity#fusion_environment_id}.

---



