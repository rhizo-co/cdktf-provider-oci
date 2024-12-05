# `loadBalancerBackendset` Submodule <a name="`loadBalancerBackendset` Submodule" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerBackendset <a name="LoadBalancerBackendset" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset oci_load_balancer_backendset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer"></a>

```typescript
import { loadBalancerBackendset } from 'rhizo-co-terraform-provider-oci'

new loadBalancerBackendset.LoadBalancerBackendset(scope: Construct, id: string, config: LoadBalancerBackendsetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig">LoadBalancerBackendsetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig">LoadBalancerBackendsetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putHealthChecker">putHealthChecker</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putLbCookieSessionPersistenceConfiguration">putLbCookieSessionPersistenceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSessionPersistenceConfiguration">putSessionPersistenceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSslConfiguration">putSslConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetBackendMaxConnections">resetBackendMaxConnections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetLbCookieSessionPersistenceConfiguration">resetLbCookieSessionPersistenceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetSessionPersistenceConfiguration">resetSessionPersistenceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetSslConfiguration">resetSslConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHealthChecker` <a name="putHealthChecker" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putHealthChecker"></a>

```typescript
public putHealthChecker(value: LoadBalancerBackendsetHealthChecker): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putHealthChecker.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a>

---

##### `putLbCookieSessionPersistenceConfiguration` <a name="putLbCookieSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putLbCookieSessionPersistenceConfiguration"></a>

```typescript
public putLbCookieSessionPersistenceConfiguration(value: LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putLbCookieSessionPersistenceConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a>

---

##### `putSessionPersistenceConfiguration` <a name="putSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSessionPersistenceConfiguration"></a>

```typescript
public putSessionPersistenceConfiguration(value: LoadBalancerBackendsetSessionPersistenceConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSessionPersistenceConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a>

---

##### `putSslConfiguration` <a name="putSslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSslConfiguration"></a>

```typescript
public putSslConfiguration(value: LoadBalancerBackendsetSslConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putSslConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putTimeouts"></a>

```typescript
public putTimeouts(value: LoadBalancerBackendsetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a>

---

##### `resetBackendMaxConnections` <a name="resetBackendMaxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetBackendMaxConnections"></a>

```typescript
public resetBackendMaxConnections(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLbCookieSessionPersistenceConfiguration` <a name="resetLbCookieSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetLbCookieSessionPersistenceConfiguration"></a>

```typescript
public resetLbCookieSessionPersistenceConfiguration(): void
```

##### `resetSessionPersistenceConfiguration` <a name="resetSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetSessionPersistenceConfiguration"></a>

```typescript
public resetSessionPersistenceConfiguration(): void
```

##### `resetSslConfiguration` <a name="resetSslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetSslConfiguration"></a>

```typescript
public resetSslConfiguration(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LoadBalancerBackendset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isConstruct"></a>

```typescript
import { loadBalancerBackendset } from 'rhizo-co-terraform-provider-oci'

loadBalancerBackendset.LoadBalancerBackendset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformElement"></a>

```typescript
import { loadBalancerBackendset } from 'rhizo-co-terraform-provider-oci'

loadBalancerBackendset.LoadBalancerBackendset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformResource"></a>

```typescript
import { loadBalancerBackendset } from 'rhizo-co-terraform-provider-oci'

loadBalancerBackendset.LoadBalancerBackendset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport"></a>

```typescript
import { loadBalancerBackendset } from 'rhizo-co-terraform-provider-oci'

loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LoadBalancerBackendset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoadBalancerBackendset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoadBalancerBackendset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoadBalancerBackendset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backend">backend</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList">LoadBalancerBackendsetBackendList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.healthChecker">healthChecker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference">LoadBalancerBackendsetHealthCheckerOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lbCookieSessionPersistenceConfiguration">lbCookieSessionPersistenceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference">LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sessionPersistenceConfiguration">sessionPersistenceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference">LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sslConfiguration">sslConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference">LoadBalancerBackendsetSslConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference">LoadBalancerBackendsetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backendMaxConnectionsInput">backendMaxConnectionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.healthCheckerInput">healthCheckerInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lbCookieSessionPersistenceConfigurationInput">lbCookieSessionPersistenceConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.loadBalancerIdInput">loadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sessionPersistenceConfigurationInput">sessionPersistenceConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sslConfigurationInput">sslConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backendMaxConnections">backendMaxConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.policy">policy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backend"></a>

```typescript
public readonly backend: LoadBalancerBackendsetBackendList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList">LoadBalancerBackendsetBackendList</a>

---

##### `healthChecker`<sup>Required</sup> <a name="healthChecker" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.healthChecker"></a>

```typescript
public readonly healthChecker: LoadBalancerBackendsetHealthCheckerOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference">LoadBalancerBackendsetHealthCheckerOutputReference</a>

---

##### `lbCookieSessionPersistenceConfiguration`<sup>Required</sup> <a name="lbCookieSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lbCookieSessionPersistenceConfiguration"></a>

```typescript
public readonly lbCookieSessionPersistenceConfiguration: LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference">LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference</a>

---

##### `sessionPersistenceConfiguration`<sup>Required</sup> <a name="sessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sessionPersistenceConfiguration"></a>

```typescript
public readonly sessionPersistenceConfiguration: LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference">LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference</a>

---

##### `sslConfiguration`<sup>Required</sup> <a name="sslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sslConfiguration"></a>

```typescript
public readonly sslConfiguration: LoadBalancerBackendsetSslConfigurationOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference">LoadBalancerBackendsetSslConfigurationOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.timeouts"></a>

```typescript
public readonly timeouts: LoadBalancerBackendsetTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference">LoadBalancerBackendsetTimeoutsOutputReference</a>

---

##### `backendMaxConnectionsInput`<sup>Optional</sup> <a name="backendMaxConnectionsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backendMaxConnectionsInput"></a>

```typescript
public readonly backendMaxConnectionsInput: number;
```

- *Type:* number

---

##### `healthCheckerInput`<sup>Optional</sup> <a name="healthCheckerInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.healthCheckerInput"></a>

```typescript
public readonly healthCheckerInput: LoadBalancerBackendsetHealthChecker;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lbCookieSessionPersistenceConfigurationInput`<sup>Optional</sup> <a name="lbCookieSessionPersistenceConfigurationInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.lbCookieSessionPersistenceConfigurationInput"></a>

```typescript
public readonly lbCookieSessionPersistenceConfigurationInput: LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a>

---

##### `loadBalancerIdInput`<sup>Optional</sup> <a name="loadBalancerIdInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.loadBalancerIdInput"></a>

```typescript
public readonly loadBalancerIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `sessionPersistenceConfigurationInput`<sup>Optional</sup> <a name="sessionPersistenceConfigurationInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sessionPersistenceConfigurationInput"></a>

```typescript
public readonly sessionPersistenceConfigurationInput: LoadBalancerBackendsetSessionPersistenceConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a>

---

##### `sslConfigurationInput`<sup>Optional</sup> <a name="sslConfigurationInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.sslConfigurationInput"></a>

```typescript
public readonly sslConfigurationInput: LoadBalancerBackendsetSslConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LoadBalancerBackendsetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a>

---

##### `backendMaxConnections`<sup>Required</sup> <a name="backendMaxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.backendMaxConnections"></a>

```typescript
public readonly backendMaxConnections: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerBackendsetBackend <a name="LoadBalancerBackendsetBackend" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackend"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackend.Initializer"></a>

```typescript
import { loadBalancerBackendset } from 'rhizo-co-terraform-provider-oci'

const loadBalancerBackendsetBackend: loadBalancerBackendset.LoadBalancerBackendsetBackend = { ... }
```


### LoadBalancerBackendsetConfig <a name="LoadBalancerBackendsetConfig" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.Initializer"></a>

```typescript
import { loadBalancerBackendset } from 'rhizo-co-terraform-provider-oci'

const loadBalancerBackendsetConfig: loadBalancerBackendset.LoadBalancerBackendsetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.healthChecker">healthChecker</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a></code> | health_checker block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#load_balancer_id LoadBalancerBackendset#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#name LoadBalancerBackendset#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.policy">policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#policy LoadBalancerBackendset#policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.backendMaxConnections">backendMaxConnections</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#backend_max_connections LoadBalancerBackendset#backend_max_connections}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#id LoadBalancerBackendset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.lbCookieSessionPersistenceConfiguration">lbCookieSessionPersistenceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a></code> | lb_cookie_session_persistence_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.sessionPersistenceConfiguration">sessionPersistenceConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a></code> | session_persistence_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.sslConfiguration">sslConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a></code> | ssl_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `healthChecker`<sup>Required</sup> <a name="healthChecker" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.healthChecker"></a>

```typescript
public readonly healthChecker: LoadBalancerBackendsetHealthChecker;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a>

health_checker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#health_checker LoadBalancerBackendset#health_checker}

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#load_balancer_id LoadBalancerBackendset#load_balancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#name LoadBalancerBackendset#name}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#policy LoadBalancerBackendset#policy}.

---

##### `backendMaxConnections`<sup>Optional</sup> <a name="backendMaxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.backendMaxConnections"></a>

```typescript
public readonly backendMaxConnections: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#backend_max_connections LoadBalancerBackendset#backend_max_connections}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#id LoadBalancerBackendset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lbCookieSessionPersistenceConfiguration`<sup>Optional</sup> <a name="lbCookieSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.lbCookieSessionPersistenceConfiguration"></a>

```typescript
public readonly lbCookieSessionPersistenceConfiguration: LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a>

lb_cookie_session_persistence_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#lb_cookie_session_persistence_configuration LoadBalancerBackendset#lb_cookie_session_persistence_configuration}

---

##### `sessionPersistenceConfiguration`<sup>Optional</sup> <a name="sessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.sessionPersistenceConfiguration"></a>

```typescript
public readonly sessionPersistenceConfiguration: LoadBalancerBackendsetSessionPersistenceConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a>

session_persistence_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#session_persistence_configuration LoadBalancerBackendset#session_persistence_configuration}

---

##### `sslConfiguration`<sup>Optional</sup> <a name="sslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.sslConfiguration"></a>

```typescript
public readonly sslConfiguration: LoadBalancerBackendsetSslConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a>

ssl_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#ssl_configuration LoadBalancerBackendset#ssl_configuration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LoadBalancerBackendsetTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#timeouts LoadBalancerBackendset#timeouts}

---

### LoadBalancerBackendsetHealthChecker <a name="LoadBalancerBackendsetHealthChecker" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.Initializer"></a>

```typescript
import { loadBalancerBackendset } from 'rhizo-co-terraform-provider-oci'

const loadBalancerBackendsetHealthChecker: loadBalancerBackendset.LoadBalancerBackendsetHealthChecker = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#protocol LoadBalancerBackendset#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.intervalMs">intervalMs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#interval_ms LoadBalancerBackendset#interval_ms}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.isForcePlainText">isForcePlainText</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_force_plain_text LoadBalancerBackendset#is_force_plain_text}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#port LoadBalancerBackendset#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.responseBodyRegex">responseBodyRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#response_body_regex LoadBalancerBackendset#response_body_regex}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.retries">retries</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#retries LoadBalancerBackendset#retries}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.returnCode">returnCode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#return_code LoadBalancerBackendset#return_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.timeoutInMillis">timeoutInMillis</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#timeout_in_millis LoadBalancerBackendset#timeout_in_millis}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.urlPath">urlPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#url_path LoadBalancerBackendset#url_path}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#protocol LoadBalancerBackendset#protocol}.

---

##### `intervalMs`<sup>Optional</sup> <a name="intervalMs" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.intervalMs"></a>

```typescript
public readonly intervalMs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#interval_ms LoadBalancerBackendset#interval_ms}.

---

##### `isForcePlainText`<sup>Optional</sup> <a name="isForcePlainText" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.isForcePlainText"></a>

```typescript
public readonly isForcePlainText: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_force_plain_text LoadBalancerBackendset#is_force_plain_text}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#port LoadBalancerBackendset#port}.

---

##### `responseBodyRegex`<sup>Optional</sup> <a name="responseBodyRegex" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.responseBodyRegex"></a>

```typescript
public readonly responseBodyRegex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#response_body_regex LoadBalancerBackendset#response_body_regex}.

---

##### `retries`<sup>Optional</sup> <a name="retries" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#retries LoadBalancerBackendset#retries}.

---

##### `returnCode`<sup>Optional</sup> <a name="returnCode" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.returnCode"></a>

```typescript
public readonly returnCode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#return_code LoadBalancerBackendset#return_code}.

---

##### `timeoutInMillis`<sup>Optional</sup> <a name="timeoutInMillis" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.timeoutInMillis"></a>

```typescript
public readonly timeoutInMillis: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#timeout_in_millis LoadBalancerBackendset#timeout_in_millis}.

---

##### `urlPath`<sup>Optional</sup> <a name="urlPath" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker.property.urlPath"></a>

```typescript
public readonly urlPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#url_path LoadBalancerBackendset#url_path}.

---

### LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration <a name="LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.Initializer"></a>

```typescript
import { loadBalancerBackendset } from 'rhizo-co-terraform-provider-oci'

const loadBalancerBackendsetLbCookieSessionPersistenceConfiguration: loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.cookieName">cookieName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cookie_name LoadBalancerBackendset#cookie_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.disableFallback">disableFallback</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#disable_fallback LoadBalancerBackendset#disable_fallback}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#domain LoadBalancerBackendset#domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.isHttpOnly">isHttpOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_http_only LoadBalancerBackendset#is_http_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.isSecure">isSecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_secure LoadBalancerBackendset#is_secure}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#max_age_in_seconds LoadBalancerBackendset#max_age_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#path LoadBalancerBackendset#path}. |

---

##### `cookieName`<sup>Optional</sup> <a name="cookieName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.cookieName"></a>

```typescript
public readonly cookieName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cookie_name LoadBalancerBackendset#cookie_name}.

---

##### `disableFallback`<sup>Optional</sup> <a name="disableFallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.disableFallback"></a>

```typescript
public readonly disableFallback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#disable_fallback LoadBalancerBackendset#disable_fallback}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#domain LoadBalancerBackendset#domain}.

---

##### `isHttpOnly`<sup>Optional</sup> <a name="isHttpOnly" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.isHttpOnly"></a>

```typescript
public readonly isHttpOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_http_only LoadBalancerBackendset#is_http_only}.

---

##### `isSecure`<sup>Optional</sup> <a name="isSecure" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.isSecure"></a>

```typescript
public readonly isSecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#is_secure LoadBalancerBackendset#is_secure}.

---

##### `maxAgeInSeconds`<sup>Optional</sup> <a name="maxAgeInSeconds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.maxAgeInSeconds"></a>

```typescript
public readonly maxAgeInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#max_age_in_seconds LoadBalancerBackendset#max_age_in_seconds}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#path LoadBalancerBackendset#path}.

---

### LoadBalancerBackendsetSessionPersistenceConfiguration <a name="LoadBalancerBackendsetSessionPersistenceConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration.Initializer"></a>

```typescript
import { loadBalancerBackendset } from 'rhizo-co-terraform-provider-oci'

const loadBalancerBackendsetSessionPersistenceConfiguration: loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration.property.cookieName">cookieName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cookie_name LoadBalancerBackendset#cookie_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration.property.disableFallback">disableFallback</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#disable_fallback LoadBalancerBackendset#disable_fallback}. |

---

##### `cookieName`<sup>Required</sup> <a name="cookieName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration.property.cookieName"></a>

```typescript
public readonly cookieName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cookie_name LoadBalancerBackendset#cookie_name}.

---

##### `disableFallback`<sup>Optional</sup> <a name="disableFallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration.property.disableFallback"></a>

```typescript
public readonly disableFallback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#disable_fallback LoadBalancerBackendset#disable_fallback}.

---

### LoadBalancerBackendsetSslConfiguration <a name="LoadBalancerBackendsetSslConfiguration" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.Initializer"></a>

```typescript
import { loadBalancerBackendset } from 'rhizo-co-terraform-provider-oci'

const loadBalancerBackendsetSslConfiguration: loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.certificateIds">certificateIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#certificate_ids LoadBalancerBackendset#certificate_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.certificateName">certificateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#certificate_name LoadBalancerBackendset#certificate_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.cipherSuiteName">cipherSuiteName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cipher_suite_name LoadBalancerBackendset#cipher_suite_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.protocols">protocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#protocols LoadBalancerBackendset#protocols}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.serverOrderPreference">serverOrderPreference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#server_order_preference LoadBalancerBackendset#server_order_preference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.trustedCertificateAuthorityIds">trustedCertificateAuthorityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#trusted_certificate_authority_ids LoadBalancerBackendset#trusted_certificate_authority_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.verifyDepth">verifyDepth</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#verify_depth LoadBalancerBackendset#verify_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.verifyPeerCertificate">verifyPeerCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#verify_peer_certificate LoadBalancerBackendset#verify_peer_certificate}. |

---

##### `certificateIds`<sup>Optional</sup> <a name="certificateIds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.certificateIds"></a>

```typescript
public readonly certificateIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#certificate_ids LoadBalancerBackendset#certificate_ids}.

---

##### `certificateName`<sup>Optional</sup> <a name="certificateName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#certificate_name LoadBalancerBackendset#certificate_name}.

---

##### `cipherSuiteName`<sup>Optional</sup> <a name="cipherSuiteName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.cipherSuiteName"></a>

```typescript
public readonly cipherSuiteName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#cipher_suite_name LoadBalancerBackendset#cipher_suite_name}.

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#protocols LoadBalancerBackendset#protocols}.

---

##### `serverOrderPreference`<sup>Optional</sup> <a name="serverOrderPreference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.serverOrderPreference"></a>

```typescript
public readonly serverOrderPreference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#server_order_preference LoadBalancerBackendset#server_order_preference}.

---

##### `trustedCertificateAuthorityIds`<sup>Optional</sup> <a name="trustedCertificateAuthorityIds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.trustedCertificateAuthorityIds"></a>

```typescript
public readonly trustedCertificateAuthorityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#trusted_certificate_authority_ids LoadBalancerBackendset#trusted_certificate_authority_ids}.

---

##### `verifyDepth`<sup>Optional</sup> <a name="verifyDepth" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.verifyDepth"></a>

```typescript
public readonly verifyDepth: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#verify_depth LoadBalancerBackendset#verify_depth}.

---

##### `verifyPeerCertificate`<sup>Optional</sup> <a name="verifyPeerCertificate" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration.property.verifyPeerCertificate"></a>

```typescript
public readonly verifyPeerCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#verify_peer_certificate LoadBalancerBackendset#verify_peer_certificate}.

---

### LoadBalancerBackendsetTimeouts <a name="LoadBalancerBackendsetTimeouts" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.Initializer"></a>

```typescript
import { loadBalancerBackendset } from 'rhizo-co-terraform-provider-oci'

const loadBalancerBackendsetTimeouts: loadBalancerBackendset.LoadBalancerBackendsetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#create LoadBalancerBackendset#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#delete LoadBalancerBackendset#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#update LoadBalancerBackendset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#create LoadBalancerBackendset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#delete LoadBalancerBackendset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/load_balancer_backendset#update LoadBalancerBackendset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerBackendsetBackendList <a name="LoadBalancerBackendsetBackendList" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer"></a>

```typescript
import { loadBalancerBackendset } from 'rhizo-co-terraform-provider-oci'

new loadBalancerBackendset.LoadBalancerBackendsetBackendList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.get"></a>

```typescript
public get(index: number): LoadBalancerBackendsetBackendOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### LoadBalancerBackendsetBackendOutputReference <a name="LoadBalancerBackendsetBackendOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer"></a>

```typescript
import { loadBalancerBackendset } from 'rhizo-co-terraform-provider-oci'

new loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.backup">backup</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.drain">drain</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.maxConnections">maxConnections</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.offline">offline</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackend">LoadBalancerBackendsetBackend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backup`<sup>Required</sup> <a name="backup" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.backup"></a>

```typescript
public readonly backup: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `drain`<sup>Required</sup> <a name="drain" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.drain"></a>

```typescript
public readonly drain: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `maxConnections`<sup>Required</sup> <a name="maxConnections" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.maxConnections"></a>

```typescript
public readonly maxConnections: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `offline`<sup>Required</sup> <a name="offline" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.offline"></a>

```typescript
public readonly offline: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackendOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LoadBalancerBackendsetBackend;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetBackend">LoadBalancerBackendsetBackend</a>

---


### LoadBalancerBackendsetHealthCheckerOutputReference <a name="LoadBalancerBackendsetHealthCheckerOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.Initializer"></a>

```typescript
import { loadBalancerBackendset } from 'rhizo-co-terraform-provider-oci'

new loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetIntervalMs">resetIntervalMs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetIsForcePlainText">resetIsForcePlainText</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetResponseBodyRegex">resetResponseBodyRegex</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetRetries">resetRetries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetReturnCode">resetReturnCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetTimeoutInMillis">resetTimeoutInMillis</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetUrlPath">resetUrlPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntervalMs` <a name="resetIntervalMs" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetIntervalMs"></a>

```typescript
public resetIntervalMs(): void
```

##### `resetIsForcePlainText` <a name="resetIsForcePlainText" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetIsForcePlainText"></a>

```typescript
public resetIsForcePlainText(): void
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetResponseBodyRegex` <a name="resetResponseBodyRegex" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetResponseBodyRegex"></a>

```typescript
public resetResponseBodyRegex(): void
```

##### `resetRetries` <a name="resetRetries" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetRetries"></a>

```typescript
public resetRetries(): void
```

##### `resetReturnCode` <a name="resetReturnCode" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetReturnCode"></a>

```typescript
public resetReturnCode(): void
```

##### `resetTimeoutInMillis` <a name="resetTimeoutInMillis" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetTimeoutInMillis"></a>

```typescript
public resetTimeoutInMillis(): void
```

##### `resetUrlPath` <a name="resetUrlPath" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.resetUrlPath"></a>

```typescript
public resetUrlPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.intervalMsInput">intervalMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.isForcePlainTextInput">isForcePlainTextInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.responseBodyRegexInput">responseBodyRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.retriesInput">retriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.returnCodeInput">returnCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.timeoutInMillisInput">timeoutInMillisInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.urlPathInput">urlPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.intervalMs">intervalMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.isForcePlainText">isForcePlainText</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.responseBodyRegex">responseBodyRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.retries">retries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.returnCode">returnCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.timeoutInMillis">timeoutInMillis</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.urlPath">urlPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intervalMsInput`<sup>Optional</sup> <a name="intervalMsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.intervalMsInput"></a>

```typescript
public readonly intervalMsInput: number;
```

- *Type:* number

---

##### `isForcePlainTextInput`<sup>Optional</sup> <a name="isForcePlainTextInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.isForcePlainTextInput"></a>

```typescript
public readonly isForcePlainTextInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `responseBodyRegexInput`<sup>Optional</sup> <a name="responseBodyRegexInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.responseBodyRegexInput"></a>

```typescript
public readonly responseBodyRegexInput: string;
```

- *Type:* string

---

##### `retriesInput`<sup>Optional</sup> <a name="retriesInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.retriesInput"></a>

```typescript
public readonly retriesInput: number;
```

- *Type:* number

---

##### `returnCodeInput`<sup>Optional</sup> <a name="returnCodeInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.returnCodeInput"></a>

```typescript
public readonly returnCodeInput: number;
```

- *Type:* number

---

##### `timeoutInMillisInput`<sup>Optional</sup> <a name="timeoutInMillisInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.timeoutInMillisInput"></a>

```typescript
public readonly timeoutInMillisInput: number;
```

- *Type:* number

---

##### `urlPathInput`<sup>Optional</sup> <a name="urlPathInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.urlPathInput"></a>

```typescript
public readonly urlPathInput: string;
```

- *Type:* string

---

##### `intervalMs`<sup>Required</sup> <a name="intervalMs" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.intervalMs"></a>

```typescript
public readonly intervalMs: number;
```

- *Type:* number

---

##### `isForcePlainText`<sup>Required</sup> <a name="isForcePlainText" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.isForcePlainText"></a>

```typescript
public readonly isForcePlainText: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `responseBodyRegex`<sup>Required</sup> <a name="responseBodyRegex" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.responseBodyRegex"></a>

```typescript
public readonly responseBodyRegex: string;
```

- *Type:* string

---

##### `retries`<sup>Required</sup> <a name="retries" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.retries"></a>

```typescript
public readonly retries: number;
```

- *Type:* number

---

##### `returnCode`<sup>Required</sup> <a name="returnCode" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.returnCode"></a>

```typescript
public readonly returnCode: number;
```

- *Type:* number

---

##### `timeoutInMillis`<sup>Required</sup> <a name="timeoutInMillis" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.timeoutInMillis"></a>

```typescript
public readonly timeoutInMillis: number;
```

- *Type:* number

---

##### `urlPath`<sup>Required</sup> <a name="urlPath" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.urlPath"></a>

```typescript
public readonly urlPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthCheckerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LoadBalancerBackendsetHealthChecker;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetHealthChecker">LoadBalancerBackendsetHealthChecker</a>

---


### LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference <a name="LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.Initializer"></a>

```typescript
import { loadBalancerBackendset } from 'rhizo-co-terraform-provider-oci'

new loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetCookieName">resetCookieName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetDisableFallback">resetDisableFallback</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetIsHttpOnly">resetIsHttpOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetIsSecure">resetIsSecure</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetMaxAgeInSeconds">resetMaxAgeInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCookieName` <a name="resetCookieName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetCookieName"></a>

```typescript
public resetCookieName(): void
```

##### `resetDisableFallback` <a name="resetDisableFallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetDisableFallback"></a>

```typescript
public resetDisableFallback(): void
```

##### `resetDomain` <a name="resetDomain" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetIsHttpOnly` <a name="resetIsHttpOnly" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetIsHttpOnly"></a>

```typescript
public resetIsHttpOnly(): void
```

##### `resetIsSecure` <a name="resetIsSecure" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetIsSecure"></a>

```typescript
public resetIsSecure(): void
```

##### `resetMaxAgeInSeconds` <a name="resetMaxAgeInSeconds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetMaxAgeInSeconds"></a>

```typescript
public resetMaxAgeInSeconds(): void
```

##### `resetPath` <a name="resetPath" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.cookieNameInput">cookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.disableFallbackInput">disableFallbackInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isHttpOnlyInput">isHttpOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isSecureInput">isSecureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.maxAgeInSecondsInput">maxAgeInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.cookieName">cookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.disableFallback">disableFallback</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isHttpOnly">isHttpOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isSecure">isSecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.maxAgeInSeconds">maxAgeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cookieNameInput`<sup>Optional</sup> <a name="cookieNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.cookieNameInput"></a>

```typescript
public readonly cookieNameInput: string;
```

- *Type:* string

---

##### `disableFallbackInput`<sup>Optional</sup> <a name="disableFallbackInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.disableFallbackInput"></a>

```typescript
public readonly disableFallbackInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `isHttpOnlyInput`<sup>Optional</sup> <a name="isHttpOnlyInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isHttpOnlyInput"></a>

```typescript
public readonly isHttpOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSecureInput`<sup>Optional</sup> <a name="isSecureInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isSecureInput"></a>

```typescript
public readonly isSecureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxAgeInSecondsInput`<sup>Optional</sup> <a name="maxAgeInSecondsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.maxAgeInSecondsInput"></a>

```typescript
public readonly maxAgeInSecondsInput: number;
```

- *Type:* number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `cookieName`<sup>Required</sup> <a name="cookieName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.cookieName"></a>

```typescript
public readonly cookieName: string;
```

- *Type:* string

---

##### `disableFallback`<sup>Required</sup> <a name="disableFallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.disableFallback"></a>

```typescript
public readonly disableFallback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `isHttpOnly`<sup>Required</sup> <a name="isHttpOnly" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isHttpOnly"></a>

```typescript
public readonly isHttpOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isSecure`<sup>Required</sup> <a name="isSecure" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.isSecure"></a>

```typescript
public readonly isSecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxAgeInSeconds`<sup>Required</sup> <a name="maxAgeInSeconds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.maxAgeInSeconds"></a>

```typescript
public readonly maxAgeInSeconds: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration">LoadBalancerBackendsetLbCookieSessionPersistenceConfiguration</a>

---


### LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference <a name="LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.Initializer"></a>

```typescript
import { loadBalancerBackendset } from 'rhizo-co-terraform-provider-oci'

new loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.resetDisableFallback">resetDisableFallback</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableFallback` <a name="resetDisableFallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.resetDisableFallback"></a>

```typescript
public resetDisableFallback(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.cookieNameInput">cookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.disableFallbackInput">disableFallbackInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.cookieName">cookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.disableFallback">disableFallback</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cookieNameInput`<sup>Optional</sup> <a name="cookieNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.cookieNameInput"></a>

```typescript
public readonly cookieNameInput: string;
```

- *Type:* string

---

##### `disableFallbackInput`<sup>Optional</sup> <a name="disableFallbackInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.disableFallbackInput"></a>

```typescript
public readonly disableFallbackInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cookieName`<sup>Required</sup> <a name="cookieName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.cookieName"></a>

```typescript
public readonly cookieName: string;
```

- *Type:* string

---

##### `disableFallback`<sup>Required</sup> <a name="disableFallback" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.disableFallback"></a>

```typescript
public readonly disableFallback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LoadBalancerBackendsetSessionPersistenceConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSessionPersistenceConfiguration">LoadBalancerBackendsetSessionPersistenceConfiguration</a>

---


### LoadBalancerBackendsetSslConfigurationOutputReference <a name="LoadBalancerBackendsetSslConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.Initializer"></a>

```typescript
import { loadBalancerBackendset } from 'rhizo-co-terraform-provider-oci'

new loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCertificateIds">resetCertificateIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCertificateName">resetCertificateName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCipherSuiteName">resetCipherSuiteName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetProtocols">resetProtocols</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetServerOrderPreference">resetServerOrderPreference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetTrustedCertificateAuthorityIds">resetTrustedCertificateAuthorityIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetVerifyDepth">resetVerifyDepth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetVerifyPeerCertificate">resetVerifyPeerCertificate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateIds` <a name="resetCertificateIds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCertificateIds"></a>

```typescript
public resetCertificateIds(): void
```

##### `resetCertificateName` <a name="resetCertificateName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCertificateName"></a>

```typescript
public resetCertificateName(): void
```

##### `resetCipherSuiteName` <a name="resetCipherSuiteName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetCipherSuiteName"></a>

```typescript
public resetCipherSuiteName(): void
```

##### `resetProtocols` <a name="resetProtocols" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetProtocols"></a>

```typescript
public resetProtocols(): void
```

##### `resetServerOrderPreference` <a name="resetServerOrderPreference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetServerOrderPreference"></a>

```typescript
public resetServerOrderPreference(): void
```

##### `resetTrustedCertificateAuthorityIds` <a name="resetTrustedCertificateAuthorityIds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetTrustedCertificateAuthorityIds"></a>

```typescript
public resetTrustedCertificateAuthorityIds(): void
```

##### `resetVerifyDepth` <a name="resetVerifyDepth" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetVerifyDepth"></a>

```typescript
public resetVerifyDepth(): void
```

##### `resetVerifyPeerCertificate` <a name="resetVerifyPeerCertificate" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.resetVerifyPeerCertificate"></a>

```typescript
public resetVerifyPeerCertificate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateIdsInput">certificateIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateNameInput">certificateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.cipherSuiteNameInput">cipherSuiteNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.serverOrderPreferenceInput">serverOrderPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.trustedCertificateAuthorityIdsInput">trustedCertificateAuthorityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyDepthInput">verifyDepthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyPeerCertificateInput">verifyPeerCertificateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateIds">certificateIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateName">certificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.cipherSuiteName">cipherSuiteName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.serverOrderPreference">serverOrderPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.trustedCertificateAuthorityIds">trustedCertificateAuthorityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyDepth">verifyDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyPeerCertificate">verifyPeerCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateIdsInput`<sup>Optional</sup> <a name="certificateIdsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateIdsInput"></a>

```typescript
public readonly certificateIdsInput: string[];
```

- *Type:* string[]

---

##### `certificateNameInput`<sup>Optional</sup> <a name="certificateNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateNameInput"></a>

```typescript
public readonly certificateNameInput: string;
```

- *Type:* string

---

##### `cipherSuiteNameInput`<sup>Optional</sup> <a name="cipherSuiteNameInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.cipherSuiteNameInput"></a>

```typescript
public readonly cipherSuiteNameInput: string;
```

- *Type:* string

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: string[];
```

- *Type:* string[]

---

##### `serverOrderPreferenceInput`<sup>Optional</sup> <a name="serverOrderPreferenceInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.serverOrderPreferenceInput"></a>

```typescript
public readonly serverOrderPreferenceInput: string;
```

- *Type:* string

---

##### `trustedCertificateAuthorityIdsInput`<sup>Optional</sup> <a name="trustedCertificateAuthorityIdsInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.trustedCertificateAuthorityIdsInput"></a>

```typescript
public readonly trustedCertificateAuthorityIdsInput: string[];
```

- *Type:* string[]

---

##### `verifyDepthInput`<sup>Optional</sup> <a name="verifyDepthInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyDepthInput"></a>

```typescript
public readonly verifyDepthInput: number;
```

- *Type:* number

---

##### `verifyPeerCertificateInput`<sup>Optional</sup> <a name="verifyPeerCertificateInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyPeerCertificateInput"></a>

```typescript
public readonly verifyPeerCertificateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `certificateIds`<sup>Required</sup> <a name="certificateIds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateIds"></a>

```typescript
public readonly certificateIds: string[];
```

- *Type:* string[]

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

---

##### `cipherSuiteName`<sup>Required</sup> <a name="cipherSuiteName" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.cipherSuiteName"></a>

```typescript
public readonly cipherSuiteName: string;
```

- *Type:* string

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `serverOrderPreference`<sup>Required</sup> <a name="serverOrderPreference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.serverOrderPreference"></a>

```typescript
public readonly serverOrderPreference: string;
```

- *Type:* string

---

##### `trustedCertificateAuthorityIds`<sup>Required</sup> <a name="trustedCertificateAuthorityIds" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.trustedCertificateAuthorityIds"></a>

```typescript
public readonly trustedCertificateAuthorityIds: string[];
```

- *Type:* string[]

---

##### `verifyDepth`<sup>Required</sup> <a name="verifyDepth" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyDepth"></a>

```typescript
public readonly verifyDepth: number;
```

- *Type:* number

---

##### `verifyPeerCertificate`<sup>Required</sup> <a name="verifyPeerCertificate" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.verifyPeerCertificate"></a>

```typescript
public readonly verifyPeerCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LoadBalancerBackendsetSslConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetSslConfiguration">LoadBalancerBackendsetSslConfiguration</a>

---


### LoadBalancerBackendsetTimeoutsOutputReference <a name="LoadBalancerBackendsetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.Initializer"></a>

```typescript
import { loadBalancerBackendset } from 'rhizo-co-terraform-provider-oci'

new loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LoadBalancerBackendsetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.loadBalancerBackendset.LoadBalancerBackendsetTimeouts">LoadBalancerBackendsetTimeouts</a>

---



