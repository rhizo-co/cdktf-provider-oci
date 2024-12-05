# `dataOciFusionAppsFusionEnvironmentScheduledActivity` Submodule <a name="`dataOciFusionAppsFusionEnvironmentScheduledActivity` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironmentScheduledActivity <a name="DataOciFusionAppsFusionEnvironmentScheduledActivity" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity oci_fusion_apps_fusion_environment_scheduled_activity}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentScheduledActivity } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity(scope: Construct, id: string, config: DataOciFusionAppsFusionEnvironmentScheduledActivityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig">DataOciFusionAppsFusionEnvironmentScheduledActivityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig">DataOciFusionAppsFusionEnvironmentScheduledActivityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentScheduledActivity resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isConstruct"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentScheduledActivity } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformElement"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentScheduledActivity } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformDataSource"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentScheduledActivity } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.generateConfigForImport"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentScheduledActivity } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentScheduledActivity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentScheduledActivity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFusionAppsFusionEnvironmentScheduledActivity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentScheduledActivity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.actions">actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList">DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.delayInHours">delayInHours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.runCycle">runCycle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.serviceAvailability">serviceAvailability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeExpectedFinish">timeExpectedFinish</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeScheduledStart">timeScheduledStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.fusionEnvironmentIdInput">fusionEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.scheduledActivityIdInput">scheduledActivityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.scheduledActivityId">scheduledActivityId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `actions`<sup>Required</sup> <a name="actions" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.actions"></a>

```typescript
public readonly actions: DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList">DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList</a>

---

##### `delayInHours`<sup>Required</sup> <a name="delayInHours" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.delayInHours"></a>

```typescript
public readonly delayInHours: number;
```

- *Type:* number

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `runCycle`<sup>Required</sup> <a name="runCycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.runCycle"></a>

```typescript
public readonly runCycle: string;
```

- *Type:* string

---

##### `serviceAvailability`<sup>Required</sup> <a name="serviceAvailability" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.serviceAvailability"></a>

```typescript
public readonly serviceAvailability: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeExpectedFinish`<sup>Required</sup> <a name="timeExpectedFinish" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeExpectedFinish"></a>

```typescript
public readonly timeExpectedFinish: string;
```

- *Type:* string

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeScheduledStart`<sup>Required</sup> <a name="timeScheduledStart" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeScheduledStart"></a>

```typescript
public readonly timeScheduledStart: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `fusionEnvironmentIdInput`<sup>Optional</sup> <a name="fusionEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.fusionEnvironmentIdInput"></a>

```typescript
public readonly fusionEnvironmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `scheduledActivityIdInput`<sup>Optional</sup> <a name="scheduledActivityIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.scheduledActivityIdInput"></a>

```typescript
public readonly scheduledActivityIdInput: string;
```

- *Type:* string

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.fusionEnvironmentId"></a>

```typescript
public readonly fusionEnvironmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `scheduledActivityId`<sup>Required</sup> <a name="scheduledActivityId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.scheduledActivityId"></a>

```typescript
public readonly scheduledActivityId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentScheduledActivityActions <a name="DataOciFusionAppsFusionEnvironmentScheduledActivityActions" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActions.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentScheduledActivity } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentScheduledActivityActions: dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActions = { ... }
```


### DataOciFusionAppsFusionEnvironmentScheduledActivityConfig <a name="DataOciFusionAppsFusionEnvironmentScheduledActivityConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentScheduledActivity } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentScheduledActivityConfig: dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#fusion_environment_id DataOciFusionAppsFusionEnvironmentScheduledActivity#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.scheduledActivityId">scheduledActivityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#scheduled_activity_id DataOciFusionAppsFusionEnvironmentScheduledActivity#scheduled_activity_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#id DataOciFusionAppsFusionEnvironmentScheduledActivity#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.fusionEnvironmentId"></a>

```typescript
public readonly fusionEnvironmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#fusion_environment_id DataOciFusionAppsFusionEnvironmentScheduledActivity#fusion_environment_id}.

---

##### `scheduledActivityId`<sup>Required</sup> <a name="scheduledActivityId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.scheduledActivityId"></a>

```typescript
public readonly scheduledActivityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#scheduled_activity_id DataOciFusionAppsFusionEnvironmentScheduledActivity#scheduled_activity_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#id DataOciFusionAppsFusionEnvironmentScheduledActivity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList <a name="DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentScheduledActivity } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.get"></a>

```typescript
public get(index: number): DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference <a name="DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentScheduledActivity } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.actionType">actionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.artifact">artifact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.qualifier">qualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.referenceKey">referenceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActions">DataOciFusionAppsFusionEnvironmentScheduledActivityActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

---

##### `artifact`<sup>Required</sup> <a name="artifact" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.artifact"></a>

```typescript
public readonly artifact: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.qualifier"></a>

```typescript
public readonly qualifier: string;
```

- *Type:* string

---

##### `referenceKey`<sup>Required</sup> <a name="referenceKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.referenceKey"></a>

```typescript
public readonly referenceKey: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFusionAppsFusionEnvironmentScheduledActivityActions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActions">DataOciFusionAppsFusionEnvironmentScheduledActivityActions</a>

---



