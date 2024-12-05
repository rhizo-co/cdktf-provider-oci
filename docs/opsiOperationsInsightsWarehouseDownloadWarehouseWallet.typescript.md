# `opsiOperationsInsightsWarehouseDownloadWarehouseWallet` Submodule <a name="`opsiOperationsInsightsWarehouseDownloadWarehouseWallet` Submodule" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsiOperationsInsightsWarehouseDownloadWarehouseWallet <a name="OpsiOperationsInsightsWarehouseDownloadWarehouseWallet" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet oci_opsi_operations_insights_warehouse_download_warehouse_wallet}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer"></a>

```typescript
import { opsiOperationsInsightsWarehouseDownloadWarehouseWallet } from 'rhizo-co-terraform-provider-oci'

new opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet(scope: Construct, id: string, config: OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig">OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig">OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.putTimeouts"></a>

```typescript
public putTimeouts(value: OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts">OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OpsiOperationsInsightsWarehouseDownloadWarehouseWallet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.isConstruct"></a>

```typescript
import { opsiOperationsInsightsWarehouseDownloadWarehouseWallet } from 'rhizo-co-terraform-provider-oci'

opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.isTerraformElement"></a>

```typescript
import { opsiOperationsInsightsWarehouseDownloadWarehouseWallet } from 'rhizo-co-terraform-provider-oci'

opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.isTerraformResource"></a>

```typescript
import { opsiOperationsInsightsWarehouseDownloadWarehouseWallet } from 'rhizo-co-terraform-provider-oci'

opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.generateConfigForImport"></a>

```typescript
import { opsiOperationsInsightsWarehouseDownloadWarehouseWallet } from 'rhizo-co-terraform-provider-oci'

opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OpsiOperationsInsightsWarehouseDownloadWarehouseWallet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpsiOperationsInsightsWarehouseDownloadWarehouseWallet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpsiOperationsInsightsWarehouseDownloadWarehouseWallet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpsiOperationsInsightsWarehouseDownloadWarehouseWallet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference">OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.operationsInsightsWarehouseIdInput">operationsInsightsWarehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.operationsInsightsWarehouseWalletPasswordInput">operationsInsightsWarehouseWalletPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts">OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.operationsInsightsWarehouseId">operationsInsightsWarehouseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.operationsInsightsWarehouseWalletPassword">operationsInsightsWarehouseWalletPassword</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.timeouts"></a>

```typescript
public readonly timeouts: OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference">OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `operationsInsightsWarehouseIdInput`<sup>Optional</sup> <a name="operationsInsightsWarehouseIdInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.operationsInsightsWarehouseIdInput"></a>

```typescript
public readonly operationsInsightsWarehouseIdInput: string;
```

- *Type:* string

---

##### `operationsInsightsWarehouseWalletPasswordInput`<sup>Optional</sup> <a name="operationsInsightsWarehouseWalletPasswordInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.operationsInsightsWarehouseWalletPasswordInput"></a>

```typescript
public readonly operationsInsightsWarehouseWalletPasswordInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts">OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `operationsInsightsWarehouseId`<sup>Required</sup> <a name="operationsInsightsWarehouseId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.operationsInsightsWarehouseId"></a>

```typescript
public readonly operationsInsightsWarehouseId: string;
```

- *Type:* string

---

##### `operationsInsightsWarehouseWalletPassword`<sup>Required</sup> <a name="operationsInsightsWarehouseWalletPassword" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.operationsInsightsWarehouseWalletPassword"></a>

```typescript
public readonly operationsInsightsWarehouseWalletPassword: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWallet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig <a name="OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.Initializer"></a>

```typescript
import { opsiOperationsInsightsWarehouseDownloadWarehouseWallet } from 'rhizo-co-terraform-provider-oci'

const opsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig: opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.operationsInsightsWarehouseId">operationsInsightsWarehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#operations_insights_warehouse_id OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#operations_insights_warehouse_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.operationsInsightsWarehouseWalletPassword">operationsInsightsWarehouseWalletPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#operations_insights_warehouse_wallet_password OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#operations_insights_warehouse_wallet_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#id OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts">OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `operationsInsightsWarehouseId`<sup>Required</sup> <a name="operationsInsightsWarehouseId" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.operationsInsightsWarehouseId"></a>

```typescript
public readonly operationsInsightsWarehouseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#operations_insights_warehouse_id OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#operations_insights_warehouse_id}.

---

##### `operationsInsightsWarehouseWalletPassword`<sup>Required</sup> <a name="operationsInsightsWarehouseWalletPassword" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.operationsInsightsWarehouseWalletPassword"></a>

```typescript
public readonly operationsInsightsWarehouseWalletPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#operations_insights_warehouse_wallet_password OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#operations_insights_warehouse_wallet_password}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#id OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts">OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#timeouts OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#timeouts}

---

### OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts <a name="OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts.Initializer"></a>

```typescript
import { opsiOperationsInsightsWarehouseDownloadWarehouseWallet } from 'rhizo-co-terraform-provider-oci'

const opsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts: opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#create OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#delete OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#update OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#create OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#delete OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/opsi_operations_insights_warehouse_download_warehouse_wallet#update OpsiOperationsInsightsWarehouseDownloadWarehouseWallet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference <a name="OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.Initializer"></a>

```typescript
import { opsiOperationsInsightsWarehouseDownloadWarehouseWallet } from 'rhizo-co-terraform-provider-oci'

new opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts">OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.opsiOperationsInsightsWarehouseDownloadWarehouseWallet.OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts">OpsiOperationsInsightsWarehouseDownloadWarehouseWalletTimeouts</a>

---



