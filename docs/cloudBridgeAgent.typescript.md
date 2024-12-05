# `cloudBridgeAgent` Submodule <a name="`cloudBridgeAgent` Submodule" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudBridgeAgent <a name="CloudBridgeAgent" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_agent oci_cloud_bridge_agent}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.Initializer"></a>

```typescript
import { cloudBridgeAgent } from 'rhizo-co-terraform-provider-oci'

new cloudBridgeAgent.CloudBridgeAgent(scope: Construct, id: string, config: CloudBridgeAgentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig">CloudBridgeAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig">CloudBridgeAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudBridgeAgentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeouts">CloudBridgeAgentTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudBridgeAgent resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.isConstruct"></a>

```typescript
import { cloudBridgeAgent } from 'rhizo-co-terraform-provider-oci'

cloudBridgeAgent.CloudBridgeAgent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.isTerraformElement"></a>

```typescript
import { cloudBridgeAgent } from 'rhizo-co-terraform-provider-oci'

cloudBridgeAgent.CloudBridgeAgent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.isTerraformResource"></a>

```typescript
import { cloudBridgeAgent } from 'rhizo-co-terraform-provider-oci'

cloudBridgeAgent.CloudBridgeAgent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.generateConfigForImport"></a>

```typescript
import { cloudBridgeAgent } from 'rhizo-co-terraform-provider-oci'

cloudBridgeAgent.CloudBridgeAgent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudBridgeAgent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudBridgeAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudBridgeAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudBridgeAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.agentPubKey">agentPubKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.heartBeatStatus">heartBeatStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.pluginList">pluginList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructList">CloudBridgeAgentPluginListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.timeExpireAgentKeyInMs">timeExpireAgentKeyInMs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.timeLastSyncReceived">timeLastSyncReceived</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference">CloudBridgeAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.agentTypeInput">agentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.agentVersionInput">agentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.environmentIdInput">environmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.osVersionInput">osVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeouts">CloudBridgeAgentTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.agentType">agentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.agentVersion">agentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.osVersion">osVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `agentPubKey`<sup>Required</sup> <a name="agentPubKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.agentPubKey"></a>

```typescript
public readonly agentPubKey: string;
```

- *Type:* string

---

##### `heartBeatStatus`<sup>Required</sup> <a name="heartBeatStatus" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.heartBeatStatus"></a>

```typescript
public readonly heartBeatStatus: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `pluginList`<sup>Required</sup> <a name="pluginList" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.pluginList"></a>

```typescript
public readonly pluginList: CloudBridgeAgentPluginListStructList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructList">CloudBridgeAgentPluginListStructList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeExpireAgentKeyInMs`<sup>Required</sup> <a name="timeExpireAgentKeyInMs" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.timeExpireAgentKeyInMs"></a>

```typescript
public readonly timeExpireAgentKeyInMs: string;
```

- *Type:* string

---

##### `timeLastSyncReceived`<sup>Required</sup> <a name="timeLastSyncReceived" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.timeLastSyncReceived"></a>

```typescript
public readonly timeLastSyncReceived: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.timeouts"></a>

```typescript
public readonly timeouts: CloudBridgeAgentTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference">CloudBridgeAgentTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `agentTypeInput`<sup>Optional</sup> <a name="agentTypeInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.agentTypeInput"></a>

```typescript
public readonly agentTypeInput: string;
```

- *Type:* string

---

##### `agentVersionInput`<sup>Optional</sup> <a name="agentVersionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.agentVersionInput"></a>

```typescript
public readonly agentVersionInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `environmentIdInput`<sup>Optional</sup> <a name="environmentIdInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.environmentIdInput"></a>

```typescript
public readonly environmentIdInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `osVersionInput`<sup>Optional</sup> <a name="osVersionInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.osVersionInput"></a>

```typescript
public readonly osVersionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudBridgeAgentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeouts">CloudBridgeAgentTimeouts</a>

---

##### `agentType`<sup>Required</sup> <a name="agentType" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.agentType"></a>

```typescript
public readonly agentType: string;
```

- *Type:* string

---

##### `agentVersion`<sup>Required</sup> <a name="agentVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.agentVersion"></a>

```typescript
public readonly agentVersion: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `osVersion`<sup>Required</sup> <a name="osVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.osVersion"></a>

```typescript
public readonly osVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudBridgeAgentConfig <a name="CloudBridgeAgentConfig" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.Initializer"></a>

```typescript
import { cloudBridgeAgent } from 'rhizo-co-terraform-provider-oci'

const cloudBridgeAgentConfig: cloudBridgeAgent.CloudBridgeAgentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.agentType">agentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_agent#agent_type CloudBridgeAgent#agent_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.agentVersion">agentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_agent#agent_version CloudBridgeAgent#agent_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_agent#compartment_id CloudBridgeAgent#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_agent#display_name CloudBridgeAgent#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.environmentId">environmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_agent#environment_id CloudBridgeAgent#environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.osVersion">osVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_agent#os_version CloudBridgeAgent#os_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_agent#defined_tags CloudBridgeAgent#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_agent#freeform_tags CloudBridgeAgent#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_agent#id CloudBridgeAgent#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeouts">CloudBridgeAgentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `agentType`<sup>Required</sup> <a name="agentType" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.agentType"></a>

```typescript
public readonly agentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_agent#agent_type CloudBridgeAgent#agent_type}.

---

##### `agentVersion`<sup>Required</sup> <a name="agentVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.agentVersion"></a>

```typescript
public readonly agentVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_agent#agent_version CloudBridgeAgent#agent_version}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_agent#compartment_id CloudBridgeAgent#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_agent#display_name CloudBridgeAgent#display_name}.

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_agent#environment_id CloudBridgeAgent#environment_id}.

---

##### `osVersion`<sup>Required</sup> <a name="osVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.osVersion"></a>

```typescript
public readonly osVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_agent#os_version CloudBridgeAgent#os_version}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_agent#defined_tags CloudBridgeAgent#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_agent#freeform_tags CloudBridgeAgent#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_agent#id CloudBridgeAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudBridgeAgentTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeouts">CloudBridgeAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_agent#timeouts CloudBridgeAgent#timeouts}

---

### CloudBridgeAgentPluginListStruct <a name="CloudBridgeAgentPluginListStruct" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStruct.Initializer"></a>

```typescript
import { cloudBridgeAgent } from 'rhizo-co-terraform-provider-oci'

const cloudBridgeAgentPluginListStruct: cloudBridgeAgent.CloudBridgeAgentPluginListStruct = { ... }
```


### CloudBridgeAgentTimeouts <a name="CloudBridgeAgentTimeouts" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeouts.Initializer"></a>

```typescript
import { cloudBridgeAgent } from 'rhizo-co-terraform-provider-oci'

const cloudBridgeAgentTimeouts: cloudBridgeAgent.CloudBridgeAgentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_agent#create CloudBridgeAgent#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_agent#delete CloudBridgeAgent#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_agent#update CloudBridgeAgent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_agent#create CloudBridgeAgent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_agent#delete CloudBridgeAgent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_bridge_agent#update CloudBridgeAgent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudBridgeAgentPluginListStructList <a name="CloudBridgeAgentPluginListStructList" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructList.Initializer"></a>

```typescript
import { cloudBridgeAgent } from 'rhizo-co-terraform-provider-oci'

new cloudBridgeAgent.CloudBridgeAgentPluginListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructList.get"></a>

```typescript
public get(index: number): CloudBridgeAgentPluginListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CloudBridgeAgentPluginListStructOutputReference <a name="CloudBridgeAgentPluginListStructOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.Initializer"></a>

```typescript
import { cloudBridgeAgent } from 'rhizo-co-terraform-provider-oci'

new cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.property.agentId">agentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.property.pluginVersion">pluginVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStruct">CloudBridgeAgentPluginListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pluginVersion`<sup>Required</sup> <a name="pluginVersion" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.property.pluginVersion"></a>

```typescript
public readonly pluginVersion: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudBridgeAgentPluginListStruct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentPluginListStruct">CloudBridgeAgentPluginListStruct</a>

---


### CloudBridgeAgentTimeoutsOutputReference <a name="CloudBridgeAgentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudBridgeAgent } from 'rhizo-co-terraform-provider-oci'

new cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeouts">CloudBridgeAgentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudBridgeAgentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.cloudBridgeAgent.CloudBridgeAgentTimeouts">CloudBridgeAgentTimeouts</a>

---


