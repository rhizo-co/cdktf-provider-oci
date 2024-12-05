# `dataOciFusionAppsFusionEnvironment` Submodule <a name="`dataOciFusionAppsFusionEnvironment` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironment <a name="DataOciFusionAppsFusionEnvironment" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment oci_fusion_apps_fusion_environment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironment } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment(scope: Construct, id: string, config: DataOciFusionAppsFusionEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig">DataOciFusionAppsFusionEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig">DataOciFusionAppsFusionEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.isConstruct"></a>

```typescript
import { dataOciFusionAppsFusionEnvironment } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.isTerraformElement"></a>

```typescript
import { dataOciFusionAppsFusionEnvironment } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.isTerraformDataSource"></a>

```typescript
import { dataOciFusionAppsFusionEnvironment } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.generateConfigForImport"></a>

```typescript
import { dataOciFusionAppsFusionEnvironment } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFusionAppsFusionEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.additionalLanguagePacks">additionalLanguagePacks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.appliedPatchBundles">appliedPatchBundles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.createFusionEnvironmentAdminUserDetails">createFusionEnvironmentAdminUserDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList">DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.dnsPrefix">dnsPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.fusionEnvironmentFamilyId">fusionEnvironmentFamilyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.fusionEnvironmentType">fusionEnvironmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.idcsDomainUrl">idcsDomainUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.isBreakGlassEnabled">isBreakGlassEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.kmsKeyInfo">kmsKeyInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList">DataOciFusionAppsFusionEnvironmentKmsKeyInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.lockboxId">lockboxId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.maintenancePolicy">maintenancePolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList">DataOciFusionAppsFusionEnvironmentMaintenancePolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.publicUrl">publicUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.refresh">refresh</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList">DataOciFusionAppsFusionEnvironmentRefreshList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList">DataOciFusionAppsFusionEnvironmentRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.subscriptionIds">subscriptionIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.systemName">systemName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.timeUpcomingMaintenance">timeUpcomingMaintenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.fusionEnvironmentIdInput">fusionEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `additionalLanguagePacks`<sup>Required</sup> <a name="additionalLanguagePacks" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.additionalLanguagePacks"></a>

```typescript
public readonly additionalLanguagePacks: string[];
```

- *Type:* string[]

---

##### `appliedPatchBundles`<sup>Required</sup> <a name="appliedPatchBundles" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.appliedPatchBundles"></a>

```typescript
public readonly appliedPatchBundles: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `createFusionEnvironmentAdminUserDetails`<sup>Required</sup> <a name="createFusionEnvironmentAdminUserDetails" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.createFusionEnvironmentAdminUserDetails"></a>

```typescript
public readonly createFusionEnvironmentAdminUserDetails: DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList">DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `dnsPrefix`<sup>Required</sup> <a name="dnsPrefix" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.dnsPrefix"></a>

```typescript
public readonly dnsPrefix: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `fusionEnvironmentFamilyId`<sup>Required</sup> <a name="fusionEnvironmentFamilyId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.fusionEnvironmentFamilyId"></a>

```typescript
public readonly fusionEnvironmentFamilyId: string;
```

- *Type:* string

---

##### `fusionEnvironmentType`<sup>Required</sup> <a name="fusionEnvironmentType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.fusionEnvironmentType"></a>

```typescript
public readonly fusionEnvironmentType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsDomainUrl`<sup>Required</sup> <a name="idcsDomainUrl" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.idcsDomainUrl"></a>

```typescript
public readonly idcsDomainUrl: string;
```

- *Type:* string

---

##### `isBreakGlassEnabled`<sup>Required</sup> <a name="isBreakGlassEnabled" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.isBreakGlassEnabled"></a>

```typescript
public readonly isBreakGlassEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `kmsKeyInfo`<sup>Required</sup> <a name="kmsKeyInfo" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.kmsKeyInfo"></a>

```typescript
public readonly kmsKeyInfo: DataOciFusionAppsFusionEnvironmentKmsKeyInfoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList">DataOciFusionAppsFusionEnvironmentKmsKeyInfoList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `lockboxId`<sup>Required</sup> <a name="lockboxId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.lockboxId"></a>

```typescript
public readonly lockboxId: string;
```

- *Type:* string

---

##### `maintenancePolicy`<sup>Required</sup> <a name="maintenancePolicy" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.maintenancePolicy"></a>

```typescript
public readonly maintenancePolicy: DataOciFusionAppsFusionEnvironmentMaintenancePolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList">DataOciFusionAppsFusionEnvironmentMaintenancePolicyList</a>

---

##### `publicUrl`<sup>Required</sup> <a name="publicUrl" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.publicUrl"></a>

```typescript
public readonly publicUrl: string;
```

- *Type:* string

---

##### `refresh`<sup>Required</sup> <a name="refresh" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.refresh"></a>

```typescript
public readonly refresh: DataOciFusionAppsFusionEnvironmentRefreshList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList">DataOciFusionAppsFusionEnvironmentRefreshList</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.rules"></a>

```typescript
public readonly rules: DataOciFusionAppsFusionEnvironmentRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList">DataOciFusionAppsFusionEnvironmentRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subscriptionIds`<sup>Required</sup> <a name="subscriptionIds" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.subscriptionIds"></a>

```typescript
public readonly subscriptionIds: string[];
```

- *Type:* string[]

---

##### `systemName`<sup>Required</sup> <a name="systemName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.systemName"></a>

```typescript
public readonly systemName: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpcomingMaintenance`<sup>Required</sup> <a name="timeUpcomingMaintenance" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.timeUpcomingMaintenance"></a>

```typescript
public readonly timeUpcomingMaintenance: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `fusionEnvironmentIdInput`<sup>Optional</sup> <a name="fusionEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.fusionEnvironmentIdInput"></a>

```typescript
public readonly fusionEnvironmentIdInput: string;
```

- *Type:* string

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.fusionEnvironmentId"></a>

```typescript
public readonly fusionEnvironmentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentConfig <a name="DataOciFusionAppsFusionEnvironmentConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironment } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentConfig: dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment#fusion_environment_id DataOciFusionAppsFusionEnvironment#fusion_environment_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentConfig.property.fusionEnvironmentId"></a>

```typescript
public readonly fusionEnvironmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment#fusion_environment_id DataOciFusionAppsFusionEnvironment#fusion_environment_id}.

---

### DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails <a name="DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironment } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails: dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails = { ... }
```


### DataOciFusionAppsFusionEnvironmentKmsKeyInfo <a name="DataOciFusionAppsFusionEnvironmentKmsKeyInfo" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfo.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironment } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentKmsKeyInfo: dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfo = { ... }
```


### DataOciFusionAppsFusionEnvironmentMaintenancePolicy <a name="DataOciFusionAppsFusionEnvironmentMaintenancePolicy" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicy.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironment } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentMaintenancePolicy: dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicy = { ... }
```


### DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes <a name="DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironment } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes: dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes = { ... }
```


### DataOciFusionAppsFusionEnvironmentRefresh <a name="DataOciFusionAppsFusionEnvironmentRefresh" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefresh"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefresh.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironment } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentRefresh: dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefresh = { ... }
```


### DataOciFusionAppsFusionEnvironmentRules <a name="DataOciFusionAppsFusionEnvironmentRules" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRules.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironment } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentRules: dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRules = { ... }
```


### DataOciFusionAppsFusionEnvironmentRulesConditions <a name="DataOciFusionAppsFusionEnvironmentRulesConditions" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditions.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironment } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentRulesConditions: dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList <a name="DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironment } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.get"></a>

```typescript
public get(index: number): DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference <a name="DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironment } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails">DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails">DataOciFusionAppsFusionEnvironmentCreateFusionEnvironmentAdminUserDetails</a>

---


### DataOciFusionAppsFusionEnvironmentKmsKeyInfoList <a name="DataOciFusionAppsFusionEnvironmentKmsKeyInfoList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironment } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.get"></a>

```typescript
public get(index: number): DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference <a name="DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironment } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.activeKeyId">activeKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.activeKeyVersion">activeKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.currentKeyLifecycleState">currentKeyLifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.scheduledKeyId">scheduledKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.scheduledKeyStatus">scheduledKeyStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.scheduledKeyVersion">scheduledKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.scheduledLifecycleState">scheduledLifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfo">DataOciFusionAppsFusionEnvironmentKmsKeyInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeKeyId`<sup>Required</sup> <a name="activeKeyId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.activeKeyId"></a>

```typescript
public readonly activeKeyId: string;
```

- *Type:* string

---

##### `activeKeyVersion`<sup>Required</sup> <a name="activeKeyVersion" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.activeKeyVersion"></a>

```typescript
public readonly activeKeyVersion: string;
```

- *Type:* string

---

##### `currentKeyLifecycleState`<sup>Required</sup> <a name="currentKeyLifecycleState" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.currentKeyLifecycleState"></a>

```typescript
public readonly currentKeyLifecycleState: string;
```

- *Type:* string

---

##### `scheduledKeyId`<sup>Required</sup> <a name="scheduledKeyId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.scheduledKeyId"></a>

```typescript
public readonly scheduledKeyId: string;
```

- *Type:* string

---

##### `scheduledKeyStatus`<sup>Required</sup> <a name="scheduledKeyStatus" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.scheduledKeyStatus"></a>

```typescript
public readonly scheduledKeyStatus: string;
```

- *Type:* string

---

##### `scheduledKeyVersion`<sup>Required</sup> <a name="scheduledKeyVersion" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.scheduledKeyVersion"></a>

```typescript
public readonly scheduledKeyVersion: string;
```

- *Type:* string

---

##### `scheduledLifecycleState`<sup>Required</sup> <a name="scheduledLifecycleState" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.scheduledLifecycleState"></a>

```typescript
public readonly scheduledLifecycleState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFusionAppsFusionEnvironmentKmsKeyInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentKmsKeyInfo">DataOciFusionAppsFusionEnvironmentKmsKeyInfo</a>

---


### DataOciFusionAppsFusionEnvironmentMaintenancePolicyList <a name="DataOciFusionAppsFusionEnvironmentMaintenancePolicyList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironment } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.get"></a>

```typescript
public get(index: number): DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference <a name="DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironment } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.environmentMaintenanceOverride">environmentMaintenanceOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.monthlyPatchingOverride">monthlyPatchingOverride</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimes">quarterlyUpgradeBeginTimes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList">DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicy">DataOciFusionAppsFusionEnvironmentMaintenancePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `environmentMaintenanceOverride`<sup>Required</sup> <a name="environmentMaintenanceOverride" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.environmentMaintenanceOverride"></a>

```typescript
public readonly environmentMaintenanceOverride: string;
```

- *Type:* string

---

##### `monthlyPatchingOverride`<sup>Required</sup> <a name="monthlyPatchingOverride" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.monthlyPatchingOverride"></a>

```typescript
public readonly monthlyPatchingOverride: string;
```

- *Type:* string

---

##### `quarterlyUpgradeBeginTimes`<sup>Required</sup> <a name="quarterlyUpgradeBeginTimes" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimes"></a>

```typescript
public readonly quarterlyUpgradeBeginTimes: DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList">DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFusionAppsFusionEnvironmentMaintenancePolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicy">DataOciFusionAppsFusionEnvironmentMaintenancePolicy</a>

---


### DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList <a name="DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironment } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.get"></a>

```typescript
public get(index: number): DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference <a name="DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironment } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.beginTimesValue">beginTimesValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.overrideType">overrideType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes">DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `beginTimesValue`<sup>Required</sup> <a name="beginTimesValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.beginTimesValue"></a>

```typescript
public readonly beginTimesValue: string;
```

- *Type:* string

---

##### `overrideType`<sup>Required</sup> <a name="overrideType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.overrideType"></a>

```typescript
public readonly overrideType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes">DataOciFusionAppsFusionEnvironmentMaintenancePolicyQuarterlyUpgradeBeginTimes</a>

---


### DataOciFusionAppsFusionEnvironmentRefreshList <a name="DataOciFusionAppsFusionEnvironmentRefreshList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironment } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.get"></a>

```typescript
public get(index: number): DataOciFusionAppsFusionEnvironmentRefreshOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentRefreshOutputReference <a name="DataOciFusionAppsFusionEnvironmentRefreshOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironment } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.property.sourceFusionEnvironmentId">sourceFusionEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.property.timeFinished">timeFinished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.property.timeOfRestorationPoint">timeOfRestorationPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefresh">DataOciFusionAppsFusionEnvironmentRefresh</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceFusionEnvironmentId`<sup>Required</sup> <a name="sourceFusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.property.sourceFusionEnvironmentId"></a>

```typescript
public readonly sourceFusionEnvironmentId: string;
```

- *Type:* string

---

##### `timeFinished`<sup>Required</sup> <a name="timeFinished" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.property.timeFinished"></a>

```typescript
public readonly timeFinished: string;
```

- *Type:* string

---

##### `timeOfRestorationPoint`<sup>Required</sup> <a name="timeOfRestorationPoint" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.property.timeOfRestorationPoint"></a>

```typescript
public readonly timeOfRestorationPoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefreshOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFusionAppsFusionEnvironmentRefresh;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRefresh">DataOciFusionAppsFusionEnvironmentRefresh</a>

---


### DataOciFusionAppsFusionEnvironmentRulesConditionsList <a name="DataOciFusionAppsFusionEnvironmentRulesConditionsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironment } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.get"></a>

```typescript
public get(index: number): DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference <a name="DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironment } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.property.attributeName">attributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.property.attributeValue">attributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditions">DataOciFusionAppsFusionEnvironmentRulesConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

---

##### `attributeValue`<sup>Required</sup> <a name="attributeValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.property.attributeValue"></a>

```typescript
public readonly attributeValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFusionAppsFusionEnvironmentRulesConditions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditions">DataOciFusionAppsFusionEnvironmentRulesConditions</a>

---


### DataOciFusionAppsFusionEnvironmentRulesList <a name="DataOciFusionAppsFusionEnvironmentRulesList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironment } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.get"></a>

```typescript
public get(index: number): DataOciFusionAppsFusionEnvironmentRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciFusionAppsFusionEnvironmentRulesOutputReference <a name="DataOciFusionAppsFusionEnvironmentRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironment } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList">DataOciFusionAppsFusionEnvironmentRulesConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRules">DataOciFusionAppsFusionEnvironmentRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.property.conditions"></a>

```typescript
public readonly conditions: DataOciFusionAppsFusionEnvironmentRulesConditionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesConditionsList">DataOciFusionAppsFusionEnvironmentRulesConditionsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciFusionAppsFusionEnvironmentRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironment.DataOciFusionAppsFusionEnvironmentRules">DataOciFusionAppsFusionEnvironmentRules</a>

---



