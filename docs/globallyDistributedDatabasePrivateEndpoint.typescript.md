# `globallyDistributedDatabasePrivateEndpoint` Submodule <a name="`globallyDistributedDatabasePrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GloballyDistributedDatabasePrivateEndpoint <a name="GloballyDistributedDatabasePrivateEndpoint" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint oci_globally_distributed_database_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer"></a>

```typescript
import { globallyDistributedDatabasePrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

new globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint(scope: Construct, id: string, config: GloballyDistributedDatabasePrivateEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig">GloballyDistributedDatabasePrivateEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig">GloballyDistributedDatabasePrivateEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetReinstateProxyInstanceTrigger">resetReinstateProxyInstanceTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: GloballyDistributedDatabasePrivateEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts">GloballyDistributedDatabasePrivateEndpointTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetNsgIds"></a>

```typescript
public resetNsgIds(): void
```

##### `resetReinstateProxyInstanceTrigger` <a name="resetReinstateProxyInstanceTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetReinstateProxyInstanceTrigger"></a>

```typescript
public resetReinstateProxyInstanceTrigger(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GloballyDistributedDatabasePrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isConstruct"></a>

```typescript
import { globallyDistributedDatabasePrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isTerraformElement"></a>

```typescript
import { globallyDistributedDatabasePrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isTerraformResource"></a>

```typescript
import { globallyDistributedDatabasePrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.generateConfigForImport"></a>

```typescript
import { globallyDistributedDatabasePrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GloballyDistributedDatabasePrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GloballyDistributedDatabasePrivateEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GloballyDistributedDatabasePrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GloballyDistributedDatabasePrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.lifecycleStateDetails">lifecycleStateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.proxyComputeInstanceId">proxyComputeInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.shardedDatabases">shardedDatabases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference">GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.nsgIdsInput">nsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.reinstateProxyInstanceTriggerInput">reinstateProxyInstanceTriggerInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts">GloballyDistributedDatabasePrivateEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.reinstateProxyInstanceTrigger">reinstateProxyInstanceTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lifecycleStateDetails`<sup>Required</sup> <a name="lifecycleStateDetails" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.lifecycleStateDetails"></a>

```typescript
public readonly lifecycleStateDetails: string;
```

- *Type:* string

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `proxyComputeInstanceId`<sup>Required</sup> <a name="proxyComputeInstanceId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.proxyComputeInstanceId"></a>

```typescript
public readonly proxyComputeInstanceId: string;
```

- *Type:* string

---

##### `shardedDatabases`<sup>Required</sup> <a name="shardedDatabases" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.shardedDatabases"></a>

```typescript
public readonly shardedDatabases: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference">GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.nsgIdsInput"></a>

```typescript
public readonly nsgIdsInput: string[];
```

- *Type:* string[]

---

##### `reinstateProxyInstanceTriggerInput`<sup>Optional</sup> <a name="reinstateProxyInstanceTriggerInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.reinstateProxyInstanceTriggerInput"></a>

```typescript
public readonly reinstateProxyInstanceTriggerInput: number;
```

- *Type:* number

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GloballyDistributedDatabasePrivateEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts">GloballyDistributedDatabasePrivateEndpointTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `reinstateProxyInstanceTrigger`<sup>Required</sup> <a name="reinstateProxyInstanceTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.reinstateProxyInstanceTrigger"></a>

```typescript
public readonly reinstateProxyInstanceTrigger: number;
```

- *Type:* number

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GloballyDistributedDatabasePrivateEndpointConfig <a name="GloballyDistributedDatabasePrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.Initializer"></a>

```typescript
import { globallyDistributedDatabasePrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

const globallyDistributedDatabasePrivateEndpointConfig: globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#compartment_id GloballyDistributedDatabasePrivateEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#display_name GloballyDistributedDatabasePrivateEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#subnet_id GloballyDistributedDatabasePrivateEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#defined_tags GloballyDistributedDatabasePrivateEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#description GloballyDistributedDatabasePrivateEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#freeform_tags GloballyDistributedDatabasePrivateEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#id GloballyDistributedDatabasePrivateEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#nsg_ids GloballyDistributedDatabasePrivateEndpoint#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.reinstateProxyInstanceTrigger">reinstateProxyInstanceTrigger</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#reinstate_proxy_instance_trigger GloballyDistributedDatabasePrivateEndpoint#reinstate_proxy_instance_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts">GloballyDistributedDatabasePrivateEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#compartment_id GloballyDistributedDatabasePrivateEndpoint#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#display_name GloballyDistributedDatabasePrivateEndpoint#display_name}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#subnet_id GloballyDistributedDatabasePrivateEndpoint#subnet_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#defined_tags GloballyDistributedDatabasePrivateEndpoint#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#description GloballyDistributedDatabasePrivateEndpoint#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#freeform_tags GloballyDistributedDatabasePrivateEndpoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#id GloballyDistributedDatabasePrivateEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#nsg_ids GloballyDistributedDatabasePrivateEndpoint#nsg_ids}.

---

##### `reinstateProxyInstanceTrigger`<sup>Optional</sup> <a name="reinstateProxyInstanceTrigger" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.reinstateProxyInstanceTrigger"></a>

```typescript
public readonly reinstateProxyInstanceTrigger: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#reinstate_proxy_instance_trigger GloballyDistributedDatabasePrivateEndpoint#reinstate_proxy_instance_trigger}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GloballyDistributedDatabasePrivateEndpointTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts">GloballyDistributedDatabasePrivateEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#timeouts GloballyDistributedDatabasePrivateEndpoint#timeouts}

---

### GloballyDistributedDatabasePrivateEndpointTimeouts <a name="GloballyDistributedDatabasePrivateEndpointTimeouts" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts.Initializer"></a>

```typescript
import { globallyDistributedDatabasePrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

const globallyDistributedDatabasePrivateEndpointTimeouts: globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#create GloballyDistributedDatabasePrivateEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#delete GloballyDistributedDatabasePrivateEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#update GloballyDistributedDatabasePrivateEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#create GloballyDistributedDatabasePrivateEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#delete GloballyDistributedDatabasePrivateEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/globally_distributed_database_private_endpoint#update GloballyDistributedDatabasePrivateEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference <a name="GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { globallyDistributedDatabasePrivateEndpoint } from 'rhizo-co-terraform-provider-oci'

new globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts">GloballyDistributedDatabasePrivateEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GloballyDistributedDatabasePrivateEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.globallyDistributedDatabasePrivateEndpoint.GloballyDistributedDatabasePrivateEndpointTimeouts">GloballyDistributedDatabasePrivateEndpointTimeouts</a>

---



