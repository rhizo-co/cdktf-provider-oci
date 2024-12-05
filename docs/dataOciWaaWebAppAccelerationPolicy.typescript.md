# `dataOciWaaWebAppAccelerationPolicy` Submodule <a name="`dataOciWaaWebAppAccelerationPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWaaWebAppAccelerationPolicy <a name="DataOciWaaWebAppAccelerationPolicy" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policy oci_waa_web_app_acceleration_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy(scope: Construct, id: string, config: DataOciWaaWebAppAccelerationPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig">DataOciWaaWebAppAccelerationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig">DataOciWaaWebAppAccelerationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciWaaWebAppAccelerationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.isConstruct"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.isTerraformElement"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.isTerraformDataSource"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.generateConfigForImport"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciWaaWebAppAccelerationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciWaaWebAppAccelerationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciWaaWebAppAccelerationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWaaWebAppAccelerationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.responseCachingPolicy">responseCachingPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList">DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.responseCompressionPolicy">responseCompressionPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList">DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.webAppAccelerationPolicyIdInput">webAppAccelerationPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.webAppAccelerationPolicyId">webAppAccelerationPolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `responseCachingPolicy`<sup>Required</sup> <a name="responseCachingPolicy" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.responseCachingPolicy"></a>

```typescript
public readonly responseCachingPolicy: DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList">DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList</a>

---

##### `responseCompressionPolicy`<sup>Required</sup> <a name="responseCompressionPolicy" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.responseCompressionPolicy"></a>

```typescript
public readonly responseCompressionPolicy: DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList">DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `webAppAccelerationPolicyIdInput`<sup>Optional</sup> <a name="webAppAccelerationPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.webAppAccelerationPolicyIdInput"></a>

```typescript
public readonly webAppAccelerationPolicyIdInput: string;
```

- *Type:* string

---

##### `webAppAccelerationPolicyId`<sup>Required</sup> <a name="webAppAccelerationPolicyId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.webAppAccelerationPolicyId"></a>

```typescript
public readonly webAppAccelerationPolicyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWaaWebAppAccelerationPolicyConfig <a name="DataOciWaaWebAppAccelerationPolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaaWebAppAccelerationPolicyConfig: dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.webAppAccelerationPolicyId">webAppAccelerationPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policy#web_app_acceleration_policy_id DataOciWaaWebAppAccelerationPolicy#web_app_acceleration_policy_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `webAppAccelerationPolicyId`<sup>Required</sup> <a name="webAppAccelerationPolicyId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.webAppAccelerationPolicyId"></a>

```typescript
public readonly webAppAccelerationPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policy#web_app_acceleration_policy_id DataOciWaaWebAppAccelerationPolicy#web_app_acceleration_policy_id}.

---

### DataOciWaaWebAppAccelerationPolicyResponseCachingPolicy <a name="DataOciWaaWebAppAccelerationPolicyResponseCachingPolicy" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicy.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaaWebAppAccelerationPolicyResponseCachingPolicy: dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicy = { ... }
```


### DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicy <a name="DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicy" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicy.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaaWebAppAccelerationPolicyResponseCompressionPolicy: dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicy = { ... }
```


### DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression <a name="DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

const dataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression: dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList <a name="DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.get"></a>

```typescript
public get(index: number): DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference <a name="DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.isResponseHeaderBasedCachingEnabled">isResponseHeaderBasedCachingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicy">DataOciWaaWebAppAccelerationPolicyResponseCachingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isResponseHeaderBasedCachingEnabled`<sup>Required</sup> <a name="isResponseHeaderBasedCachingEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.isResponseHeaderBasedCachingEnabled"></a>

```typescript
public readonly isResponseHeaderBasedCachingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaaWebAppAccelerationPolicyResponseCachingPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicy">DataOciWaaWebAppAccelerationPolicyResponseCachingPolicy</a>

---


### DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList <a name="DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.get"></a>

```typescript
public get(index: number): DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference <a name="DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression">DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression">DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression</a>

---


### DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList <a name="DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.get"></a>

```typescript
public get(index: number): DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference <a name="DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicy } from 'rhizo-co-terraform-provider-oci'

new dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.gzipCompression">gzipCompression</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList">DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicy">DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gzipCompression`<sup>Required</sup> <a name="gzipCompression" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.gzipCompression"></a>

```typescript
public readonly gzipCompression: DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList">DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicy">DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicy</a>

---



