# `opensearchOpensearchCluster` Submodule <a name="`opensearchOpensearchCluster` Submodule" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchOpensearchCluster <a name="OpensearchOpensearchCluster" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster oci_opensearch_opensearch_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer"></a>

```typescript
import { opensearchOpensearchCluster } from 'rhizo-co-terraform-provider-oci'

new opensearchOpensearchCluster.OpensearchOpensearchCluster(scope: Construct, id: string, config: OpensearchOpensearchClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig">OpensearchOpensearchClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig">OpensearchOpensearchClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetDataNodeHostBareMetalShape">resetDataNodeHostBareMetalShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetMasterNodeHostBareMetalShape">resetMasterNodeHostBareMetalShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMasterUserName">resetSecurityMasterUserName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMasterUserPasswordHash">resetSecurityMasterUserPasswordHash</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMode">resetSecurityMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSystemTags">resetSystemTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: OpensearchOpensearchClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a>

---

##### `resetDataNodeHostBareMetalShape` <a name="resetDataNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetDataNodeHostBareMetalShape"></a>

```typescript
public resetDataNodeHostBareMetalShape(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMasterNodeHostBareMetalShape` <a name="resetMasterNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetMasterNodeHostBareMetalShape"></a>

```typescript
public resetMasterNodeHostBareMetalShape(): void
```

##### `resetSecurityMasterUserName` <a name="resetSecurityMasterUserName" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMasterUserName"></a>

```typescript
public resetSecurityMasterUserName(): void
```

##### `resetSecurityMasterUserPasswordHash` <a name="resetSecurityMasterUserPasswordHash" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMasterUserPasswordHash"></a>

```typescript
public resetSecurityMasterUserPasswordHash(): void
```

##### `resetSecurityMode` <a name="resetSecurityMode" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSecurityMode"></a>

```typescript
public resetSecurityMode(): void
```

##### `resetSystemTags` <a name="resetSystemTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetSystemTags"></a>

```typescript
public resetSystemTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OpensearchOpensearchCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isConstruct"></a>

```typescript
import { opensearchOpensearchCluster } from 'rhizo-co-terraform-provider-oci'

opensearchOpensearchCluster.OpensearchOpensearchCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformElement"></a>

```typescript
import { opensearchOpensearchCluster } from 'rhizo-co-terraform-provider-oci'

opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformResource"></a>

```typescript
import { opensearchOpensearchCluster } from 'rhizo-co-terraform-provider-oci'

opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport"></a>

```typescript
import { opensearchOpensearchCluster } from 'rhizo-co-terraform-provider-oci'

opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OpensearchOpensearchCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpensearchOpensearchCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpensearchOpensearchCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpensearchOpensearchCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.availabilityDomains">availabilityDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardFqdn">opendashboardFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardPrivateIp">opendashboardPrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opensearchFqdn">opensearchFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opensearchPrivateIp">opensearchPrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeDeleted">timeDeleted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference">OpensearchOpensearchClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.totalStorageGb">totalStorageGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeCountInput">dataNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostBareMetalShapeInput">dataNodeHostBareMetalShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostMemoryGbInput">dataNodeHostMemoryGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostOcpuCountInput">dataNodeHostOcpuCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostTypeInput">dataNodeHostTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeStorageGbInput">dataNodeStorageGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeCountInput">masterNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostBareMetalShapeInput">masterNodeHostBareMetalShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostMemoryGbInput">masterNodeHostMemoryGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostOcpuCountInput">masterNodeHostOcpuCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostTypeInput">masterNodeHostTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeCountInput">opendashboardNodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGbInput">opendashboardNodeHostMemoryGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCountInput">opendashboardNodeHostOcpuCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserNameInput">securityMasterUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserPasswordHashInput">securityMasterUserPasswordHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityModeInput">securityModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.softwareVersionInput">softwareVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetCompartmentIdInput">subnetCompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.systemTagsInput">systemTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnCompartmentIdInput">vcnCompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnIdInput">vcnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeCount">dataNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostBareMetalShape">dataNodeHostBareMetalShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostMemoryGb">dataNodeHostMemoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostOcpuCount">dataNodeHostOcpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostType">dataNodeHostType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeStorageGb">dataNodeStorageGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeCount">masterNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostBareMetalShape">masterNodeHostBareMetalShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostMemoryGb">masterNodeHostMemoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostOcpuCount">masterNodeHostOcpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostType">masterNodeHostType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeCount">opendashboardNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGb">opendashboardNodeHostMemoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCount">opendashboardNodeHostOcpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserName">securityMasterUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserPasswordHash">securityMasterUserPasswordHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMode">securityMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.softwareVersion">softwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetCompartmentId">subnetCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.systemTags">systemTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnCompartmentId">vcnCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityDomains`<sup>Required</sup> <a name="availabilityDomains" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.availabilityDomains"></a>

```typescript
public readonly availabilityDomains: string[];
```

- *Type:* string[]

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `opendashboardFqdn`<sup>Required</sup> <a name="opendashboardFqdn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardFqdn"></a>

```typescript
public readonly opendashboardFqdn: string;
```

- *Type:* string

---

##### `opendashboardPrivateIp`<sup>Required</sup> <a name="opendashboardPrivateIp" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardPrivateIp"></a>

```typescript
public readonly opendashboardPrivateIp: string;
```

- *Type:* string

---

##### `opensearchFqdn`<sup>Required</sup> <a name="opensearchFqdn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opensearchFqdn"></a>

```typescript
public readonly opensearchFqdn: string;
```

- *Type:* string

---

##### `opensearchPrivateIp`<sup>Required</sup> <a name="opensearchPrivateIp" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opensearchPrivateIp"></a>

```typescript
public readonly opensearchPrivateIp: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeDeleted`<sup>Required</sup> <a name="timeDeleted" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeDeleted"></a>

```typescript
public readonly timeDeleted: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeouts"></a>

```typescript
public readonly timeouts: OpensearchOpensearchClusterTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference">OpensearchOpensearchClusterTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `totalStorageGb`<sup>Required</sup> <a name="totalStorageGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.totalStorageGb"></a>

```typescript
public readonly totalStorageGb: number;
```

- *Type:* number

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `dataNodeCountInput`<sup>Optional</sup> <a name="dataNodeCountInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeCountInput"></a>

```typescript
public readonly dataNodeCountInput: number;
```

- *Type:* number

---

##### `dataNodeHostBareMetalShapeInput`<sup>Optional</sup> <a name="dataNodeHostBareMetalShapeInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostBareMetalShapeInput"></a>

```typescript
public readonly dataNodeHostBareMetalShapeInput: string;
```

- *Type:* string

---

##### `dataNodeHostMemoryGbInput`<sup>Optional</sup> <a name="dataNodeHostMemoryGbInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostMemoryGbInput"></a>

```typescript
public readonly dataNodeHostMemoryGbInput: number;
```

- *Type:* number

---

##### `dataNodeHostOcpuCountInput`<sup>Optional</sup> <a name="dataNodeHostOcpuCountInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostOcpuCountInput"></a>

```typescript
public readonly dataNodeHostOcpuCountInput: number;
```

- *Type:* number

---

##### `dataNodeHostTypeInput`<sup>Optional</sup> <a name="dataNodeHostTypeInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostTypeInput"></a>

```typescript
public readonly dataNodeHostTypeInput: string;
```

- *Type:* string

---

##### `dataNodeStorageGbInput`<sup>Optional</sup> <a name="dataNodeStorageGbInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeStorageGbInput"></a>

```typescript
public readonly dataNodeStorageGbInput: number;
```

- *Type:* number

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `masterNodeCountInput`<sup>Optional</sup> <a name="masterNodeCountInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeCountInput"></a>

```typescript
public readonly masterNodeCountInput: number;
```

- *Type:* number

---

##### `masterNodeHostBareMetalShapeInput`<sup>Optional</sup> <a name="masterNodeHostBareMetalShapeInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostBareMetalShapeInput"></a>

```typescript
public readonly masterNodeHostBareMetalShapeInput: string;
```

- *Type:* string

---

##### `masterNodeHostMemoryGbInput`<sup>Optional</sup> <a name="masterNodeHostMemoryGbInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostMemoryGbInput"></a>

```typescript
public readonly masterNodeHostMemoryGbInput: number;
```

- *Type:* number

---

##### `masterNodeHostOcpuCountInput`<sup>Optional</sup> <a name="masterNodeHostOcpuCountInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostOcpuCountInput"></a>

```typescript
public readonly masterNodeHostOcpuCountInput: number;
```

- *Type:* number

---

##### `masterNodeHostTypeInput`<sup>Optional</sup> <a name="masterNodeHostTypeInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostTypeInput"></a>

```typescript
public readonly masterNodeHostTypeInput: string;
```

- *Type:* string

---

##### `opendashboardNodeCountInput`<sup>Optional</sup> <a name="opendashboardNodeCountInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeCountInput"></a>

```typescript
public readonly opendashboardNodeCountInput: number;
```

- *Type:* number

---

##### `opendashboardNodeHostMemoryGbInput`<sup>Optional</sup> <a name="opendashboardNodeHostMemoryGbInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGbInput"></a>

```typescript
public readonly opendashboardNodeHostMemoryGbInput: number;
```

- *Type:* number

---

##### `opendashboardNodeHostOcpuCountInput`<sup>Optional</sup> <a name="opendashboardNodeHostOcpuCountInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCountInput"></a>

```typescript
public readonly opendashboardNodeHostOcpuCountInput: number;
```

- *Type:* number

---

##### `securityMasterUserNameInput`<sup>Optional</sup> <a name="securityMasterUserNameInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserNameInput"></a>

```typescript
public readonly securityMasterUserNameInput: string;
```

- *Type:* string

---

##### `securityMasterUserPasswordHashInput`<sup>Optional</sup> <a name="securityMasterUserPasswordHashInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserPasswordHashInput"></a>

```typescript
public readonly securityMasterUserPasswordHashInput: string;
```

- *Type:* string

---

##### `securityModeInput`<sup>Optional</sup> <a name="securityModeInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityModeInput"></a>

```typescript
public readonly securityModeInput: string;
```

- *Type:* string

---

##### `softwareVersionInput`<sup>Optional</sup> <a name="softwareVersionInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.softwareVersionInput"></a>

```typescript
public readonly softwareVersionInput: string;
```

- *Type:* string

---

##### `subnetCompartmentIdInput`<sup>Optional</sup> <a name="subnetCompartmentIdInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetCompartmentIdInput"></a>

```typescript
public readonly subnetCompartmentIdInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `systemTagsInput`<sup>Optional</sup> <a name="systemTagsInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.systemTagsInput"></a>

```typescript
public readonly systemTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OpensearchOpensearchClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a>

---

##### `vcnCompartmentIdInput`<sup>Optional</sup> <a name="vcnCompartmentIdInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnCompartmentIdInput"></a>

```typescript
public readonly vcnCompartmentIdInput: string;
```

- *Type:* string

---

##### `vcnIdInput`<sup>Optional</sup> <a name="vcnIdInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnIdInput"></a>

```typescript
public readonly vcnIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dataNodeCount`<sup>Required</sup> <a name="dataNodeCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeCount"></a>

```typescript
public readonly dataNodeCount: number;
```

- *Type:* number

---

##### `dataNodeHostBareMetalShape`<sup>Required</sup> <a name="dataNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostBareMetalShape"></a>

```typescript
public readonly dataNodeHostBareMetalShape: string;
```

- *Type:* string

---

##### `dataNodeHostMemoryGb`<sup>Required</sup> <a name="dataNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostMemoryGb"></a>

```typescript
public readonly dataNodeHostMemoryGb: number;
```

- *Type:* number

---

##### `dataNodeHostOcpuCount`<sup>Required</sup> <a name="dataNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostOcpuCount"></a>

```typescript
public readonly dataNodeHostOcpuCount: number;
```

- *Type:* number

---

##### `dataNodeHostType`<sup>Required</sup> <a name="dataNodeHostType" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeHostType"></a>

```typescript
public readonly dataNodeHostType: string;
```

- *Type:* string

---

##### `dataNodeStorageGb`<sup>Required</sup> <a name="dataNodeStorageGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.dataNodeStorageGb"></a>

```typescript
public readonly dataNodeStorageGb: number;
```

- *Type:* number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `masterNodeCount`<sup>Required</sup> <a name="masterNodeCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeCount"></a>

```typescript
public readonly masterNodeCount: number;
```

- *Type:* number

---

##### `masterNodeHostBareMetalShape`<sup>Required</sup> <a name="masterNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostBareMetalShape"></a>

```typescript
public readonly masterNodeHostBareMetalShape: string;
```

- *Type:* string

---

##### `masterNodeHostMemoryGb`<sup>Required</sup> <a name="masterNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostMemoryGb"></a>

```typescript
public readonly masterNodeHostMemoryGb: number;
```

- *Type:* number

---

##### `masterNodeHostOcpuCount`<sup>Required</sup> <a name="masterNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostOcpuCount"></a>

```typescript
public readonly masterNodeHostOcpuCount: number;
```

- *Type:* number

---

##### `masterNodeHostType`<sup>Required</sup> <a name="masterNodeHostType" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.masterNodeHostType"></a>

```typescript
public readonly masterNodeHostType: string;
```

- *Type:* string

---

##### `opendashboardNodeCount`<sup>Required</sup> <a name="opendashboardNodeCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeCount"></a>

```typescript
public readonly opendashboardNodeCount: number;
```

- *Type:* number

---

##### `opendashboardNodeHostMemoryGb`<sup>Required</sup> <a name="opendashboardNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGb"></a>

```typescript
public readonly opendashboardNodeHostMemoryGb: number;
```

- *Type:* number

---

##### `opendashboardNodeHostOcpuCount`<sup>Required</sup> <a name="opendashboardNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCount"></a>

```typescript
public readonly opendashboardNodeHostOcpuCount: number;
```

- *Type:* number

---

##### `securityMasterUserName`<sup>Required</sup> <a name="securityMasterUserName" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserName"></a>

```typescript
public readonly securityMasterUserName: string;
```

- *Type:* string

---

##### `securityMasterUserPasswordHash`<sup>Required</sup> <a name="securityMasterUserPasswordHash" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMasterUserPasswordHash"></a>

```typescript
public readonly securityMasterUserPasswordHash: string;
```

- *Type:* string

---

##### `securityMode`<sup>Required</sup> <a name="securityMode" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.securityMode"></a>

```typescript
public readonly securityMode: string;
```

- *Type:* string

---

##### `softwareVersion`<sup>Required</sup> <a name="softwareVersion" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.softwareVersion"></a>

```typescript
public readonly softwareVersion: string;
```

- *Type:* string

---

##### `subnetCompartmentId`<sup>Required</sup> <a name="subnetCompartmentId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetCompartmentId"></a>

```typescript
public readonly subnetCompartmentId: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.systemTags"></a>

```typescript
public readonly systemTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vcnCompartmentId`<sup>Required</sup> <a name="vcnCompartmentId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnCompartmentId"></a>

```typescript
public readonly vcnCompartmentId: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchOpensearchClusterConfig <a name="OpensearchOpensearchClusterConfig" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.Initializer"></a>

```typescript
import { opensearchOpensearchCluster } from 'rhizo-co-terraform-provider-oci'

const opensearchOpensearchClusterConfig: opensearchOpensearchCluster.OpensearchOpensearchClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#compartment_id OpensearchOpensearchCluster#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeCount">dataNodeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_count OpensearchOpensearchCluster#data_node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostMemoryGb">dataNodeHostMemoryGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_memory_gb OpensearchOpensearchCluster#data_node_host_memory_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostOcpuCount">dataNodeHostOcpuCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_ocpu_count OpensearchOpensearchCluster#data_node_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostType">dataNodeHostType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_type OpensearchOpensearchCluster#data_node_host_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeStorageGb">dataNodeStorageGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_storage_gb OpensearchOpensearchCluster#data_node_storage_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#display_name OpensearchOpensearchCluster#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeCount">masterNodeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_count OpensearchOpensearchCluster#master_node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostMemoryGb">masterNodeHostMemoryGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_memory_gb OpensearchOpensearchCluster#master_node_host_memory_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostOcpuCount">masterNodeHostOcpuCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_ocpu_count OpensearchOpensearchCluster#master_node_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostType">masterNodeHostType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_type OpensearchOpensearchCluster#master_node_host_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeCount">opendashboardNodeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_count OpensearchOpensearchCluster#opendashboard_node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeHostMemoryGb">opendashboardNodeHostMemoryGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_memory_gb OpensearchOpensearchCluster#opendashboard_node_host_memory_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeHostOcpuCount">opendashboardNodeHostOcpuCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_ocpu_count OpensearchOpensearchCluster#opendashboard_node_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.softwareVersion">softwareVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#software_version OpensearchOpensearchCluster#software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.subnetCompartmentId">subnetCompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_compartment_id OpensearchOpensearchCluster#subnet_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_id OpensearchOpensearchCluster#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.vcnCompartmentId">vcnCompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_compartment_id OpensearchOpensearchCluster#vcn_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.vcnId">vcnId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_id OpensearchOpensearchCluster#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostBareMetalShape">dataNodeHostBareMetalShape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_bare_metal_shape OpensearchOpensearchCluster#data_node_host_bare_metal_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#defined_tags OpensearchOpensearchCluster#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#freeform_tags OpensearchOpensearchCluster#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#id OpensearchOpensearchCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostBareMetalShape">masterNodeHostBareMetalShape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_bare_metal_shape OpensearchOpensearchCluster#master_node_host_bare_metal_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMasterUserName">securityMasterUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_name OpensearchOpensearchCluster#security_master_user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMasterUserPasswordHash">securityMasterUserPasswordHash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_password_hash OpensearchOpensearchCluster#security_master_user_password_hash}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMode">securityMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_mode OpensearchOpensearchCluster#security_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.systemTags">systemTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#system_tags OpensearchOpensearchCluster#system_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#compartment_id OpensearchOpensearchCluster#compartment_id}.

---

##### `dataNodeCount`<sup>Required</sup> <a name="dataNodeCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeCount"></a>

```typescript
public readonly dataNodeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_count OpensearchOpensearchCluster#data_node_count}.

---

##### `dataNodeHostMemoryGb`<sup>Required</sup> <a name="dataNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostMemoryGb"></a>

```typescript
public readonly dataNodeHostMemoryGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_memory_gb OpensearchOpensearchCluster#data_node_host_memory_gb}.

---

##### `dataNodeHostOcpuCount`<sup>Required</sup> <a name="dataNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostOcpuCount"></a>

```typescript
public readonly dataNodeHostOcpuCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_ocpu_count OpensearchOpensearchCluster#data_node_host_ocpu_count}.

---

##### `dataNodeHostType`<sup>Required</sup> <a name="dataNodeHostType" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostType"></a>

```typescript
public readonly dataNodeHostType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_type OpensearchOpensearchCluster#data_node_host_type}.

---

##### `dataNodeStorageGb`<sup>Required</sup> <a name="dataNodeStorageGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeStorageGb"></a>

```typescript
public readonly dataNodeStorageGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_storage_gb OpensearchOpensearchCluster#data_node_storage_gb}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#display_name OpensearchOpensearchCluster#display_name}.

---

##### `masterNodeCount`<sup>Required</sup> <a name="masterNodeCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeCount"></a>

```typescript
public readonly masterNodeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_count OpensearchOpensearchCluster#master_node_count}.

---

##### `masterNodeHostMemoryGb`<sup>Required</sup> <a name="masterNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostMemoryGb"></a>

```typescript
public readonly masterNodeHostMemoryGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_memory_gb OpensearchOpensearchCluster#master_node_host_memory_gb}.

---

##### `masterNodeHostOcpuCount`<sup>Required</sup> <a name="masterNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostOcpuCount"></a>

```typescript
public readonly masterNodeHostOcpuCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_ocpu_count OpensearchOpensearchCluster#master_node_host_ocpu_count}.

---

##### `masterNodeHostType`<sup>Required</sup> <a name="masterNodeHostType" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostType"></a>

```typescript
public readonly masterNodeHostType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_type OpensearchOpensearchCluster#master_node_host_type}.

---

##### `opendashboardNodeCount`<sup>Required</sup> <a name="opendashboardNodeCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeCount"></a>

```typescript
public readonly opendashboardNodeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_count OpensearchOpensearchCluster#opendashboard_node_count}.

---

##### `opendashboardNodeHostMemoryGb`<sup>Required</sup> <a name="opendashboardNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeHostMemoryGb"></a>

```typescript
public readonly opendashboardNodeHostMemoryGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_memory_gb OpensearchOpensearchCluster#opendashboard_node_host_memory_gb}.

---

##### `opendashboardNodeHostOcpuCount`<sup>Required</sup> <a name="opendashboardNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.opendashboardNodeHostOcpuCount"></a>

```typescript
public readonly opendashboardNodeHostOcpuCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#opendashboard_node_host_ocpu_count OpensearchOpensearchCluster#opendashboard_node_host_ocpu_count}.

---

##### `softwareVersion`<sup>Required</sup> <a name="softwareVersion" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.softwareVersion"></a>

```typescript
public readonly softwareVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#software_version OpensearchOpensearchCluster#software_version}.

---

##### `subnetCompartmentId`<sup>Required</sup> <a name="subnetCompartmentId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.subnetCompartmentId"></a>

```typescript
public readonly subnetCompartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_compartment_id OpensearchOpensearchCluster#subnet_compartment_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#subnet_id OpensearchOpensearchCluster#subnet_id}.

---

##### `vcnCompartmentId`<sup>Required</sup> <a name="vcnCompartmentId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.vcnCompartmentId"></a>

```typescript
public readonly vcnCompartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_compartment_id OpensearchOpensearchCluster#vcn_compartment_id}.

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#vcn_id OpensearchOpensearchCluster#vcn_id}.

---

##### `dataNodeHostBareMetalShape`<sup>Optional</sup> <a name="dataNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.dataNodeHostBareMetalShape"></a>

```typescript
public readonly dataNodeHostBareMetalShape: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#data_node_host_bare_metal_shape OpensearchOpensearchCluster#data_node_host_bare_metal_shape}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#defined_tags OpensearchOpensearchCluster#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#freeform_tags OpensearchOpensearchCluster#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#id OpensearchOpensearchCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `masterNodeHostBareMetalShape`<sup>Optional</sup> <a name="masterNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.masterNodeHostBareMetalShape"></a>

```typescript
public readonly masterNodeHostBareMetalShape: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#master_node_host_bare_metal_shape OpensearchOpensearchCluster#master_node_host_bare_metal_shape}.

---

##### `securityMasterUserName`<sup>Optional</sup> <a name="securityMasterUserName" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMasterUserName"></a>

```typescript
public readonly securityMasterUserName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_name OpensearchOpensearchCluster#security_master_user_name}.

---

##### `securityMasterUserPasswordHash`<sup>Optional</sup> <a name="securityMasterUserPasswordHash" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMasterUserPasswordHash"></a>

```typescript
public readonly securityMasterUserPasswordHash: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_master_user_password_hash OpensearchOpensearchCluster#security_master_user_password_hash}.

---

##### `securityMode`<sup>Optional</sup> <a name="securityMode" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.securityMode"></a>

```typescript
public readonly securityMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#security_mode OpensearchOpensearchCluster#security_mode}.

---

##### `systemTags`<sup>Optional</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.systemTags"></a>

```typescript
public readonly systemTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#system_tags OpensearchOpensearchCluster#system_tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OpensearchOpensearchClusterTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#timeouts OpensearchOpensearchCluster#timeouts}

---

### OpensearchOpensearchClusterTimeouts <a name="OpensearchOpensearchClusterTimeouts" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.Initializer"></a>

```typescript
import { opensearchOpensearchCluster } from 'rhizo-co-terraform-provider-oci'

const opensearchOpensearchClusterTimeouts: opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#create OpensearchOpensearchCluster#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#delete OpensearchOpensearchCluster#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#update OpensearchOpensearchCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#create OpensearchOpensearchCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#delete OpensearchOpensearchCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opensearch_opensearch_cluster#update OpensearchOpensearchCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchOpensearchClusterTimeoutsOutputReference <a name="OpensearchOpensearchClusterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { opensearchOpensearchCluster } from 'rhizo-co-terraform-provider-oci'

new opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpensearchOpensearchClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opensearchOpensearchCluster.OpensearchOpensearchClusterTimeouts">OpensearchOpensearchClusterTimeouts</a>

---



