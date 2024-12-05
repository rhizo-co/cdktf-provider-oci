# `dataOciWaaWebAppAcceleration` Submodule <a name="`dataOciWaaWebAppAcceleration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWaaWebAppAcceleration <a name="DataOciWaaWebAppAcceleration" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration oci_waa_web_app_acceleration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.Initializer"></a>

```typescript
import { dataOciWaaWebAppAcceleration } from 'rhizo-co-terraform-provider-oci'

new dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration(scope: Construct, id: string, config: DataOciWaaWebAppAccelerationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAccelerationConfig">DataOciWaaWebAppAccelerationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAccelerationConfig">DataOciWaaWebAppAccelerationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciWaaWebAppAcceleration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.isConstruct"></a>

```typescript
import { dataOciWaaWebAppAcceleration } from 'rhizo-co-terraform-provider-oci'

dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.isTerraformElement"></a>

```typescript
import { dataOciWaaWebAppAcceleration } from 'rhizo-co-terraform-provider-oci'

dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.isTerraformDataSource"></a>

```typescript
import { dataOciWaaWebAppAcceleration } from 'rhizo-co-terraform-provider-oci'

dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.generateConfigForImport"></a>

```typescript
import { dataOciWaaWebAppAcceleration } from 'rhizo-co-terraform-provider-oci'

dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciWaaWebAppAcceleration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciWaaWebAppAcceleration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciWaaWebAppAcceleration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWaaWebAppAcceleration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.backendType">backendType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.webAppAccelerationPolicyId">webAppAccelerationPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.webAppAccelerationIdInput">webAppAccelerationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.webAppAccelerationId">webAppAccelerationId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `backendType`<sup>Required</sup> <a name="backendType" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.backendType"></a>

```typescript
public readonly backendType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `webAppAccelerationPolicyId`<sup>Required</sup> <a name="webAppAccelerationPolicyId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.webAppAccelerationPolicyId"></a>

```typescript
public readonly webAppAccelerationPolicyId: string;
```

- *Type:* string

---

##### `webAppAccelerationIdInput`<sup>Optional</sup> <a name="webAppAccelerationIdInput" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.webAppAccelerationIdInput"></a>

```typescript
public readonly webAppAccelerationIdInput: string;
```

- *Type:* string

---

##### `webAppAccelerationId`<sup>Required</sup> <a name="webAppAccelerationId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.webAppAccelerationId"></a>

```typescript
public readonly webAppAccelerationId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAcceleration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWaaWebAppAccelerationConfig <a name="DataOciWaaWebAppAccelerationConfig" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAccelerationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAccelerationConfig.Initializer"></a>

```typescript
import { dataOciWaaWebAppAcceleration } from 'rhizo-co-terraform-provider-oci'

const dataOciWaaWebAppAccelerationConfig: dataOciWaaWebAppAcceleration.DataOciWaaWebAppAccelerationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAccelerationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAccelerationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAccelerationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAccelerationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAccelerationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAccelerationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAccelerationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAccelerationConfig.property.webAppAccelerationId">webAppAccelerationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration#web_app_acceleration_id DataOciWaaWebAppAcceleration#web_app_acceleration_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAccelerationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAccelerationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAccelerationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAccelerationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAccelerationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAccelerationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAccelerationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `webAppAccelerationId`<sup>Required</sup> <a name="webAppAccelerationId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAcceleration.DataOciWaaWebAppAccelerationConfig.property.webAppAccelerationId"></a>

```typescript
public readonly webAppAccelerationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration#web_app_acceleration_id DataOciWaaWebAppAcceleration#web_app_acceleration_id}.

---



