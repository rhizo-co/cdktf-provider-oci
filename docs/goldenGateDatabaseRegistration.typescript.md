# `goldenGateDatabaseRegistration` Submodule <a name="`goldenGateDatabaseRegistration` Submodule" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoldenGateDatabaseRegistration <a name="GoldenGateDatabaseRegistration" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration oci_golden_gate_database_registration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.Initializer"></a>

```typescript
import { goldenGateDatabaseRegistration } from 'rhizo-co-terraform-provider-oci'

new goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration(scope: Construct, id: string, config: GoldenGateDatabaseRegistrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig">GoldenGateDatabaseRegistrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig">GoldenGateDatabaseRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetDatabaseId">resetDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetKeyId">resetKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetSecretCompartmentId">resetSecretCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetSessionMode">resetSessionMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetVaultId">resetVaultId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetWallet">resetWallet</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.putTimeouts"></a>

```typescript
public putTimeouts(value: GoldenGateDatabaseRegistrationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts">GoldenGateDatabaseRegistrationTimeouts</a>

---

##### `resetConnectionString` <a name="resetConnectionString" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetConnectionString"></a>

```typescript
public resetConnectionString(): void
```

##### `resetDatabaseId` <a name="resetDatabaseId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetDatabaseId"></a>

```typescript
public resetDatabaseId(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetKeyId` <a name="resetKeyId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetKeyId"></a>

```typescript
public resetKeyId(): void
```

##### `resetSecretCompartmentId` <a name="resetSecretCompartmentId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetSecretCompartmentId"></a>

```typescript
public resetSecretCompartmentId(): void
```

##### `resetSessionMode` <a name="resetSessionMode" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetSessionMode"></a>

```typescript
public resetSessionMode(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVaultId` <a name="resetVaultId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetVaultId"></a>

```typescript
public resetVaultId(): void
```

##### `resetWallet` <a name="resetWallet" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.resetWallet"></a>

```typescript
public resetWallet(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoldenGateDatabaseRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.isConstruct"></a>

```typescript
import { goldenGateDatabaseRegistration } from 'rhizo-co-terraform-provider-oci'

goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.isTerraformElement"></a>

```typescript
import { goldenGateDatabaseRegistration } from 'rhizo-co-terraform-provider-oci'

goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.isTerraformResource"></a>

```typescript
import { goldenGateDatabaseRegistration } from 'rhizo-co-terraform-provider-oci'

goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.generateConfigForImport"></a>

```typescript
import { goldenGateDatabaseRegistration } from 'rhizo-co-terraform-provider-oci'

goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoldenGateDatabaseRegistration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoldenGateDatabaseRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoldenGateDatabaseRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoldenGateDatabaseRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.rcePrivateIp">rcePrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference">GoldenGateDatabaseRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.aliasNameInput">aliasNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.connectionStringInput">connectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.databaseIdInput">databaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.fqdnInput">fqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.secretCompartmentIdInput">secretCompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.sessionModeInput">sessionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts">GoldenGateDatabaseRegistrationTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.vaultIdInput">vaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.walletInput">walletInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.aliasName">aliasName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.connectionString">connectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.databaseId">databaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.secretCompartmentId">secretCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.sessionMode">sessionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.wallet">wallet</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `rcePrivateIp`<sup>Required</sup> <a name="rcePrivateIp" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.rcePrivateIp"></a>

```typescript
public readonly rcePrivateIp: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.timeouts"></a>

```typescript
public readonly timeouts: GoldenGateDatabaseRegistrationTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference">GoldenGateDatabaseRegistrationTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `aliasNameInput`<sup>Optional</sup> <a name="aliasNameInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.aliasNameInput"></a>

```typescript
public readonly aliasNameInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.connectionStringInput"></a>

```typescript
public readonly connectionStringInput: string;
```

- *Type:* string

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.databaseIdInput"></a>

```typescript
public readonly databaseIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.fqdnInput"></a>

```typescript
public readonly fqdnInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `secretCompartmentIdInput`<sup>Optional</sup> <a name="secretCompartmentIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.secretCompartmentIdInput"></a>

```typescript
public readonly secretCompartmentIdInput: string;
```

- *Type:* string

---

##### `sessionModeInput`<sup>Optional</sup> <a name="sessionModeInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.sessionModeInput"></a>

```typescript
public readonly sessionModeInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoldenGateDatabaseRegistrationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts">GoldenGateDatabaseRegistrationTimeouts</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.vaultIdInput"></a>

```typescript
public readonly vaultIdInput: string;
```

- *Type:* string

---

##### `walletInput`<sup>Optional</sup> <a name="walletInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.walletInput"></a>

```typescript
public readonly walletInput: string;
```

- *Type:* string

---

##### `aliasName`<sup>Required</sup> <a name="aliasName" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.aliasName"></a>

```typescript
public readonly aliasName: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `secretCompartmentId`<sup>Required</sup> <a name="secretCompartmentId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.secretCompartmentId"></a>

```typescript
public readonly secretCompartmentId: string;
```

- *Type:* string

---

##### `sessionMode`<sup>Required</sup> <a name="sessionMode" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.sessionMode"></a>

```typescript
public readonly sessionMode: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

##### `wallet`<sup>Required</sup> <a name="wallet" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.wallet"></a>

```typescript
public readonly wallet: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoldenGateDatabaseRegistrationConfig <a name="GoldenGateDatabaseRegistrationConfig" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.Initializer"></a>

```typescript
import { goldenGateDatabaseRegistration } from 'rhizo-co-terraform-provider-oci'

const goldenGateDatabaseRegistrationConfig: goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.aliasName">aliasName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#alias_name GoldenGateDatabaseRegistration#alias_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#compartment_id GoldenGateDatabaseRegistration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#display_name GoldenGateDatabaseRegistration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.fqdn">fqdn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#fqdn GoldenGateDatabaseRegistration#fqdn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#password GoldenGateDatabaseRegistration#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#username GoldenGateDatabaseRegistration#username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.connectionString">connectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#connection_string GoldenGateDatabaseRegistration#connection_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.databaseId">databaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#database_id GoldenGateDatabaseRegistration#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#defined_tags GoldenGateDatabaseRegistration#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#description GoldenGateDatabaseRegistration#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#freeform_tags GoldenGateDatabaseRegistration#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#id GoldenGateDatabaseRegistration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#ip_address GoldenGateDatabaseRegistration#ip_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.keyId">keyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#key_id GoldenGateDatabaseRegistration#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.secretCompartmentId">secretCompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#secret_compartment_id GoldenGateDatabaseRegistration#secret_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.sessionMode">sessionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#session_mode GoldenGateDatabaseRegistration#session_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#subnet_id GoldenGateDatabaseRegistration#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts">GoldenGateDatabaseRegistrationTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.vaultId">vaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#vault_id GoldenGateDatabaseRegistration#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.wallet">wallet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#wallet GoldenGateDatabaseRegistration#wallet}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aliasName`<sup>Required</sup> <a name="aliasName" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.aliasName"></a>

```typescript
public readonly aliasName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#alias_name GoldenGateDatabaseRegistration#alias_name}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#compartment_id GoldenGateDatabaseRegistration#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#display_name GoldenGateDatabaseRegistration#display_name}.

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#fqdn GoldenGateDatabaseRegistration#fqdn}.

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#password GoldenGateDatabaseRegistration#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#username GoldenGateDatabaseRegistration#username}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#connection_string GoldenGateDatabaseRegistration#connection_string}.

---

##### `databaseId`<sup>Optional</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#database_id GoldenGateDatabaseRegistration#database_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#defined_tags GoldenGateDatabaseRegistration#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#description GoldenGateDatabaseRegistration#description}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#freeform_tags GoldenGateDatabaseRegistration#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#id GoldenGateDatabaseRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#ip_address GoldenGateDatabaseRegistration#ip_address}.

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#key_id GoldenGateDatabaseRegistration#key_id}.

---

##### `secretCompartmentId`<sup>Optional</sup> <a name="secretCompartmentId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.secretCompartmentId"></a>

```typescript
public readonly secretCompartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#secret_compartment_id GoldenGateDatabaseRegistration#secret_compartment_id}.

---

##### `sessionMode`<sup>Optional</sup> <a name="sessionMode" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.sessionMode"></a>

```typescript
public readonly sessionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#session_mode GoldenGateDatabaseRegistration#session_mode}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#subnet_id GoldenGateDatabaseRegistration#subnet_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoldenGateDatabaseRegistrationTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts">GoldenGateDatabaseRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#timeouts GoldenGateDatabaseRegistration#timeouts}

---

##### `vaultId`<sup>Optional</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#vault_id GoldenGateDatabaseRegistration#vault_id}.

---

##### `wallet`<sup>Optional</sup> <a name="wallet" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationConfig.property.wallet"></a>

```typescript
public readonly wallet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#wallet GoldenGateDatabaseRegistration#wallet}.

---

### GoldenGateDatabaseRegistrationTimeouts <a name="GoldenGateDatabaseRegistrationTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts.Initializer"></a>

```typescript
import { goldenGateDatabaseRegistration } from 'rhizo-co-terraform-provider-oci'

const goldenGateDatabaseRegistrationTimeouts: goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#create GoldenGateDatabaseRegistration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#delete GoldenGateDatabaseRegistration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#update GoldenGateDatabaseRegistration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#create GoldenGateDatabaseRegistration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#delete GoldenGateDatabaseRegistration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_database_registration#update GoldenGateDatabaseRegistration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoldenGateDatabaseRegistrationTimeoutsOutputReference <a name="GoldenGateDatabaseRegistrationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.Initializer"></a>

```typescript
import { goldenGateDatabaseRegistration } from 'rhizo-co-terraform-provider-oci'

new goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts">GoldenGateDatabaseRegistrationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoldenGateDatabaseRegistrationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateDatabaseRegistration.GoldenGateDatabaseRegistrationTimeouts">GoldenGateDatabaseRegistrationTimeouts</a>

---



