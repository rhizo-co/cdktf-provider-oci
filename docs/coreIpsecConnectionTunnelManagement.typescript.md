# `coreIpsecConnectionTunnelManagement` Submodule <a name="`coreIpsecConnectionTunnelManagement` Submodule" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreIpsecConnectionTunnelManagement <a name="CoreIpsecConnectionTunnelManagement" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management oci_core_ipsec_connection_tunnel_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer"></a>

```typescript
import { coreIpsecConnectionTunnelManagement } from 'rhizo-co-terraform-provider-oci'

new coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement(scope: Construct, id: string, config: CoreIpsecConnectionTunnelManagementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig">CoreIpsecConnectionTunnelManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig">CoreIpsecConnectionTunnelManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putBgpSessionInfo">putBgpSessionInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putDpdConfig">putDpdConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putEncryptionDomainConfig">putEncryptionDomainConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseOneDetails">putPhaseOneDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseTwoDetails">putPhaseTwoDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetBgpSessionInfo">resetBgpSessionInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetDpdConfig">resetDpdConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetEncryptionDomainConfig">resetEncryptionDomainConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetIkeVersion">resetIkeVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetNatTranslationEnabled">resetNatTranslationEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetOracleCanInitiate">resetOracleCanInitiate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetPhaseOneDetails">resetPhaseOneDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetPhaseTwoDetails">resetPhaseTwoDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetRouting">resetRouting</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetSharedSecret">resetSharedSecret</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBgpSessionInfo` <a name="putBgpSessionInfo" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putBgpSessionInfo"></a>

```typescript
public putBgpSessionInfo(value: CoreIpsecConnectionTunnelManagementBgpSessionInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putBgpSessionInfo.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a>

---

##### `putDpdConfig` <a name="putDpdConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putDpdConfig"></a>

```typescript
public putDpdConfig(value: IResolvable | CoreIpsecConnectionTunnelManagementDpdConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putDpdConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig">CoreIpsecConnectionTunnelManagementDpdConfig</a>[]

---

##### `putEncryptionDomainConfig` <a name="putEncryptionDomainConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putEncryptionDomainConfig"></a>

```typescript
public putEncryptionDomainConfig(value: CoreIpsecConnectionTunnelManagementEncryptionDomainConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putEncryptionDomainConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a>

---

##### `putPhaseOneDetails` <a name="putPhaseOneDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseOneDetails"></a>

```typescript
public putPhaseOneDetails(value: CoreIpsecConnectionTunnelManagementPhaseOneDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseOneDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a>

---

##### `putPhaseTwoDetails` <a name="putPhaseTwoDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseTwoDetails"></a>

```typescript
public putPhaseTwoDetails(value: CoreIpsecConnectionTunnelManagementPhaseTwoDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putPhaseTwoDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putTimeouts"></a>

```typescript
public putTimeouts(value: CoreIpsecConnectionTunnelManagementTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts">CoreIpsecConnectionTunnelManagementTimeouts</a>

---

##### `resetBgpSessionInfo` <a name="resetBgpSessionInfo" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetBgpSessionInfo"></a>

```typescript
public resetBgpSessionInfo(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDpdConfig` <a name="resetDpdConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetDpdConfig"></a>

```typescript
public resetDpdConfig(): void
```

##### `resetEncryptionDomainConfig` <a name="resetEncryptionDomainConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetEncryptionDomainConfig"></a>

```typescript
public resetEncryptionDomainConfig(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIkeVersion` <a name="resetIkeVersion" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetIkeVersion"></a>

```typescript
public resetIkeVersion(): void
```

##### `resetNatTranslationEnabled` <a name="resetNatTranslationEnabled" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetNatTranslationEnabled"></a>

```typescript
public resetNatTranslationEnabled(): void
```

##### `resetOracleCanInitiate` <a name="resetOracleCanInitiate" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetOracleCanInitiate"></a>

```typescript
public resetOracleCanInitiate(): void
```

##### `resetPhaseOneDetails` <a name="resetPhaseOneDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetPhaseOneDetails"></a>

```typescript
public resetPhaseOneDetails(): void
```

##### `resetPhaseTwoDetails` <a name="resetPhaseTwoDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetPhaseTwoDetails"></a>

```typescript
public resetPhaseTwoDetails(): void
```

##### `resetRouting` <a name="resetRouting" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetRouting"></a>

```typescript
public resetRouting(): void
```

##### `resetSharedSecret` <a name="resetSharedSecret" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetSharedSecret"></a>

```typescript
public resetSharedSecret(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreIpsecConnectionTunnelManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isConstruct"></a>

```typescript
import { coreIpsecConnectionTunnelManagement } from 'rhizo-co-terraform-provider-oci'

coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isTerraformElement"></a>

```typescript
import { coreIpsecConnectionTunnelManagement } from 'rhizo-co-terraform-provider-oci'

coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isTerraformResource"></a>

```typescript
import { coreIpsecConnectionTunnelManagement } from 'rhizo-co-terraform-provider-oci'

coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.generateConfigForImport"></a>

```typescript
import { coreIpsecConnectionTunnelManagement } from 'rhizo-co-terraform-provider-oci'

coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CoreIpsecConnectionTunnelManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreIpsecConnectionTunnelManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreIpsecConnectionTunnelManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreIpsecConnectionTunnelManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.associatedVirtualCircuits">associatedVirtualCircuits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.bgpSessionInfo">bgpSessionInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference">CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.cpeIp">cpeIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdConfig">dpdConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList">CoreIpsecConnectionTunnelManagementDpdConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdMode">dpdMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdTimeoutInSec">dpdTimeoutInSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.encryptionDomainConfig">encryptionDomainConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference">CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseOneDetails">phaseOneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference">CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseTwoDetails">phaseTwoDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference">CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference">CoreIpsecConnectionTunnelManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeStatusUpdated">timeStatusUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.vpnIp">vpnIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.bgpSessionInfoInput">bgpSessionInfoInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdConfigInput">dpdConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig">CoreIpsecConnectionTunnelManagementDpdConfig</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.encryptionDomainConfigInput">encryptionDomainConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ikeVersionInput">ikeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ipsecIdInput">ipsecIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.natTranslationEnabledInput">natTranslationEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.oracleCanInitiateInput">oracleCanInitiateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseOneDetailsInput">phaseOneDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseTwoDetailsInput">phaseTwoDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.routingInput">routingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.sharedSecretInput">sharedSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts">CoreIpsecConnectionTunnelManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.tunnelIdInput">tunnelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ikeVersion">ikeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ipsecId">ipsecId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.natTranslationEnabled">natTranslationEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.oracleCanInitiate">oracleCanInitiate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.routing">routing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.sharedSecret">sharedSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.tunnelId">tunnelId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `associatedVirtualCircuits`<sup>Required</sup> <a name="associatedVirtualCircuits" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.associatedVirtualCircuits"></a>

```typescript
public readonly associatedVirtualCircuits: string[];
```

- *Type:* string[]

---

##### `bgpSessionInfo`<sup>Required</sup> <a name="bgpSessionInfo" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.bgpSessionInfo"></a>

```typescript
public readonly bgpSessionInfo: CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference">CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `cpeIp`<sup>Required</sup> <a name="cpeIp" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.cpeIp"></a>

```typescript
public readonly cpeIp: string;
```

- *Type:* string

---

##### `dpdConfig`<sup>Required</sup> <a name="dpdConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdConfig"></a>

```typescript
public readonly dpdConfig: CoreIpsecConnectionTunnelManagementDpdConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList">CoreIpsecConnectionTunnelManagementDpdConfigList</a>

---

##### `dpdMode`<sup>Required</sup> <a name="dpdMode" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdMode"></a>

```typescript
public readonly dpdMode: string;
```

- *Type:* string

---

##### `dpdTimeoutInSec`<sup>Required</sup> <a name="dpdTimeoutInSec" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdTimeoutInSec"></a>

```typescript
public readonly dpdTimeoutInSec: number;
```

- *Type:* number

---

##### `encryptionDomainConfig`<sup>Required</sup> <a name="encryptionDomainConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.encryptionDomainConfig"></a>

```typescript
public readonly encryptionDomainConfig: CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference">CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference</a>

---

##### `phaseOneDetails`<sup>Required</sup> <a name="phaseOneDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseOneDetails"></a>

```typescript
public readonly phaseOneDetails: CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference">CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference</a>

---

##### `phaseTwoDetails`<sup>Required</sup> <a name="phaseTwoDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseTwoDetails"></a>

```typescript
public readonly phaseTwoDetails: CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference">CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeouts"></a>

```typescript
public readonly timeouts: CoreIpsecConnectionTunnelManagementTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference">CoreIpsecConnectionTunnelManagementTimeoutsOutputReference</a>

---

##### `timeStatusUpdated`<sup>Required</sup> <a name="timeStatusUpdated" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeStatusUpdated"></a>

```typescript
public readonly timeStatusUpdated: string;
```

- *Type:* string

---

##### `vpnIp`<sup>Required</sup> <a name="vpnIp" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.vpnIp"></a>

```typescript
public readonly vpnIp: string;
```

- *Type:* string

---

##### `bgpSessionInfoInput`<sup>Optional</sup> <a name="bgpSessionInfoInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.bgpSessionInfoInput"></a>

```typescript
public readonly bgpSessionInfoInput: CoreIpsecConnectionTunnelManagementBgpSessionInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `dpdConfigInput`<sup>Optional</sup> <a name="dpdConfigInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.dpdConfigInput"></a>

```typescript
public readonly dpdConfigInput: IResolvable | CoreIpsecConnectionTunnelManagementDpdConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig">CoreIpsecConnectionTunnelManagementDpdConfig</a>[]

---

##### `encryptionDomainConfigInput`<sup>Optional</sup> <a name="encryptionDomainConfigInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.encryptionDomainConfigInput"></a>

```typescript
public readonly encryptionDomainConfigInput: CoreIpsecConnectionTunnelManagementEncryptionDomainConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ikeVersionInput`<sup>Optional</sup> <a name="ikeVersionInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ikeVersionInput"></a>

```typescript
public readonly ikeVersionInput: string;
```

- *Type:* string

---

##### `ipsecIdInput`<sup>Optional</sup> <a name="ipsecIdInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ipsecIdInput"></a>

```typescript
public readonly ipsecIdInput: string;
```

- *Type:* string

---

##### `natTranslationEnabledInput`<sup>Optional</sup> <a name="natTranslationEnabledInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.natTranslationEnabledInput"></a>

```typescript
public readonly natTranslationEnabledInput: string;
```

- *Type:* string

---

##### `oracleCanInitiateInput`<sup>Optional</sup> <a name="oracleCanInitiateInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.oracleCanInitiateInput"></a>

```typescript
public readonly oracleCanInitiateInput: string;
```

- *Type:* string

---

##### `phaseOneDetailsInput`<sup>Optional</sup> <a name="phaseOneDetailsInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseOneDetailsInput"></a>

```typescript
public readonly phaseOneDetailsInput: CoreIpsecConnectionTunnelManagementPhaseOneDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a>

---

##### `phaseTwoDetailsInput`<sup>Optional</sup> <a name="phaseTwoDetailsInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.phaseTwoDetailsInput"></a>

```typescript
public readonly phaseTwoDetailsInput: CoreIpsecConnectionTunnelManagementPhaseTwoDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a>

---

##### `routingInput`<sup>Optional</sup> <a name="routingInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.routingInput"></a>

```typescript
public readonly routingInput: string;
```

- *Type:* string

---

##### `sharedSecretInput`<sup>Optional</sup> <a name="sharedSecretInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.sharedSecretInput"></a>

```typescript
public readonly sharedSecretInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CoreIpsecConnectionTunnelManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts">CoreIpsecConnectionTunnelManagementTimeouts</a>

---

##### `tunnelIdInput`<sup>Optional</sup> <a name="tunnelIdInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.tunnelIdInput"></a>

```typescript
public readonly tunnelIdInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ikeVersion`<sup>Required</sup> <a name="ikeVersion" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ikeVersion"></a>

```typescript
public readonly ikeVersion: string;
```

- *Type:* string

---

##### `ipsecId`<sup>Required</sup> <a name="ipsecId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.ipsecId"></a>

```typescript
public readonly ipsecId: string;
```

- *Type:* string

---

##### `natTranslationEnabled`<sup>Required</sup> <a name="natTranslationEnabled" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.natTranslationEnabled"></a>

```typescript
public readonly natTranslationEnabled: string;
```

- *Type:* string

---

##### `oracleCanInitiate`<sup>Required</sup> <a name="oracleCanInitiate" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.oracleCanInitiate"></a>

```typescript
public readonly oracleCanInitiate: string;
```

- *Type:* string

---

##### `routing`<sup>Required</sup> <a name="routing" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.routing"></a>

```typescript
public readonly routing: string;
```

- *Type:* string

---

##### `sharedSecret`<sup>Required</sup> <a name="sharedSecret" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.sharedSecret"></a>

```typescript
public readonly sharedSecret: string;
```

- *Type:* string

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreIpsecConnectionTunnelManagementBgpSessionInfo <a name="CoreIpsecConnectionTunnelManagementBgpSessionInfo" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.Initializer"></a>

```typescript
import { coreIpsecConnectionTunnelManagement } from 'rhizo-co-terraform-provider-oci'

const coreIpsecConnectionTunnelManagementBgpSessionInfo: coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.customerBgpAsn">customerBgpAsn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#customer_bgp_asn CoreIpsecConnectionTunnelManagement#customer_bgp_asn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.customerInterfaceIp">customerInterfaceIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#customer_interface_ip CoreIpsecConnectionTunnelManagement#customer_interface_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.customerInterfaceIpv6">customerInterfaceIpv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#customer_interface_ipv6 CoreIpsecConnectionTunnelManagement#customer_interface_ipv6}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.oracleInterfaceIp">oracleInterfaceIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_interface_ip CoreIpsecConnectionTunnelManagement#oracle_interface_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.oracleInterfaceIpv6">oracleInterfaceIpv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_interface_ipv6 CoreIpsecConnectionTunnelManagement#oracle_interface_ipv6}. |

---

##### `customerBgpAsn`<sup>Optional</sup> <a name="customerBgpAsn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.customerBgpAsn"></a>

```typescript
public readonly customerBgpAsn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#customer_bgp_asn CoreIpsecConnectionTunnelManagement#customer_bgp_asn}.

---

##### `customerInterfaceIp`<sup>Optional</sup> <a name="customerInterfaceIp" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.customerInterfaceIp"></a>

```typescript
public readonly customerInterfaceIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#customer_interface_ip CoreIpsecConnectionTunnelManagement#customer_interface_ip}.

---

##### `customerInterfaceIpv6`<sup>Optional</sup> <a name="customerInterfaceIpv6" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.customerInterfaceIpv6"></a>

```typescript
public readonly customerInterfaceIpv6: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#customer_interface_ipv6 CoreIpsecConnectionTunnelManagement#customer_interface_ipv6}.

---

##### `oracleInterfaceIp`<sup>Optional</sup> <a name="oracleInterfaceIp" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.oracleInterfaceIp"></a>

```typescript
public readonly oracleInterfaceIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_interface_ip CoreIpsecConnectionTunnelManagement#oracle_interface_ip}.

---

##### `oracleInterfaceIpv6`<sup>Optional</sup> <a name="oracleInterfaceIpv6" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo.property.oracleInterfaceIpv6"></a>

```typescript
public readonly oracleInterfaceIpv6: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_interface_ipv6 CoreIpsecConnectionTunnelManagement#oracle_interface_ipv6}.

---

### CoreIpsecConnectionTunnelManagementConfig <a name="CoreIpsecConnectionTunnelManagementConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.Initializer"></a>

```typescript
import { coreIpsecConnectionTunnelManagement } from 'rhizo-co-terraform-provider-oci'

const coreIpsecConnectionTunnelManagementConfig: coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.ipsecId">ipsecId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#ipsec_id CoreIpsecConnectionTunnelManagement#ipsec_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.tunnelId">tunnelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#tunnel_id CoreIpsecConnectionTunnelManagement#tunnel_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.bgpSessionInfo">bgpSessionInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a></code> | bgp_session_info block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#display_name CoreIpsecConnectionTunnelManagement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.dpdConfig">dpdConfig</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig">CoreIpsecConnectionTunnelManagementDpdConfig</a>[]</code> | dpd_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.encryptionDomainConfig">encryptionDomainConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a></code> | encryption_domain_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#id CoreIpsecConnectionTunnelManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.ikeVersion">ikeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#ike_version CoreIpsecConnectionTunnelManagement#ike_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.natTranslationEnabled">natTranslationEnabled</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#nat_translation_enabled CoreIpsecConnectionTunnelManagement#nat_translation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.oracleCanInitiate">oracleCanInitiate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_can_initiate CoreIpsecConnectionTunnelManagement#oracle_can_initiate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.phaseOneDetails">phaseOneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a></code> | phase_one_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.phaseTwoDetails">phaseTwoDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a></code> | phase_two_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.routing">routing</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#routing CoreIpsecConnectionTunnelManagement#routing}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.sharedSecret">sharedSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#shared_secret CoreIpsecConnectionTunnelManagement#shared_secret}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts">CoreIpsecConnectionTunnelManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ipsecId`<sup>Required</sup> <a name="ipsecId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.ipsecId"></a>

```typescript
public readonly ipsecId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#ipsec_id CoreIpsecConnectionTunnelManagement#ipsec_id}.

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#tunnel_id CoreIpsecConnectionTunnelManagement#tunnel_id}.

---

##### `bgpSessionInfo`<sup>Optional</sup> <a name="bgpSessionInfo" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.bgpSessionInfo"></a>

```typescript
public readonly bgpSessionInfo: CoreIpsecConnectionTunnelManagementBgpSessionInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a>

bgp_session_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#bgp_session_info CoreIpsecConnectionTunnelManagement#bgp_session_info}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#display_name CoreIpsecConnectionTunnelManagement#display_name}.

---

##### `dpdConfig`<sup>Optional</sup> <a name="dpdConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.dpdConfig"></a>

```typescript
public readonly dpdConfig: IResolvable | CoreIpsecConnectionTunnelManagementDpdConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig">CoreIpsecConnectionTunnelManagementDpdConfig</a>[]

dpd_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dpd_config CoreIpsecConnectionTunnelManagement#dpd_config}

---

##### `encryptionDomainConfig`<sup>Optional</sup> <a name="encryptionDomainConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.encryptionDomainConfig"></a>

```typescript
public readonly encryptionDomainConfig: CoreIpsecConnectionTunnelManagementEncryptionDomainConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a>

encryption_domain_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#encryption_domain_config CoreIpsecConnectionTunnelManagement#encryption_domain_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#id CoreIpsecConnectionTunnelManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ikeVersion`<sup>Optional</sup> <a name="ikeVersion" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.ikeVersion"></a>

```typescript
public readonly ikeVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#ike_version CoreIpsecConnectionTunnelManagement#ike_version}.

---

##### `natTranslationEnabled`<sup>Optional</sup> <a name="natTranslationEnabled" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.natTranslationEnabled"></a>

```typescript
public readonly natTranslationEnabled: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#nat_translation_enabled CoreIpsecConnectionTunnelManagement#nat_translation_enabled}.

---

##### `oracleCanInitiate`<sup>Optional</sup> <a name="oracleCanInitiate" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.oracleCanInitiate"></a>

```typescript
public readonly oracleCanInitiate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_can_initiate CoreIpsecConnectionTunnelManagement#oracle_can_initiate}.

---

##### `phaseOneDetails`<sup>Optional</sup> <a name="phaseOneDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.phaseOneDetails"></a>

```typescript
public readonly phaseOneDetails: CoreIpsecConnectionTunnelManagementPhaseOneDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a>

phase_one_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#phase_one_details CoreIpsecConnectionTunnelManagement#phase_one_details}

---

##### `phaseTwoDetails`<sup>Optional</sup> <a name="phaseTwoDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.phaseTwoDetails"></a>

```typescript
public readonly phaseTwoDetails: CoreIpsecConnectionTunnelManagementPhaseTwoDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a>

phase_two_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#phase_two_details CoreIpsecConnectionTunnelManagement#phase_two_details}

---

##### `routing`<sup>Optional</sup> <a name="routing" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.routing"></a>

```typescript
public readonly routing: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#routing CoreIpsecConnectionTunnelManagement#routing}.

---

##### `sharedSecret`<sup>Optional</sup> <a name="sharedSecret" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.sharedSecret"></a>

```typescript
public readonly sharedSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#shared_secret CoreIpsecConnectionTunnelManagement#shared_secret}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CoreIpsecConnectionTunnelManagementTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts">CoreIpsecConnectionTunnelManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#timeouts CoreIpsecConnectionTunnelManagement#timeouts}

---

### CoreIpsecConnectionTunnelManagementDpdConfig <a name="CoreIpsecConnectionTunnelManagementDpdConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig.Initializer"></a>

```typescript
import { coreIpsecConnectionTunnelManagement } from 'rhizo-co-terraform-provider-oci'

const coreIpsecConnectionTunnelManagementDpdConfig: coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig.property.dpdMode">dpdMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dpd_mode CoreIpsecConnectionTunnelManagement#dpd_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig.property.dpdTimeoutInSec">dpdTimeoutInSec</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dpd_timeout_in_sec CoreIpsecConnectionTunnelManagement#dpd_timeout_in_sec}. |

---

##### `dpdMode`<sup>Optional</sup> <a name="dpdMode" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig.property.dpdMode"></a>

```typescript
public readonly dpdMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dpd_mode CoreIpsecConnectionTunnelManagement#dpd_mode}.

---

##### `dpdTimeoutInSec`<sup>Optional</sup> <a name="dpdTimeoutInSec" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig.property.dpdTimeoutInSec"></a>

```typescript
public readonly dpdTimeoutInSec: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dpd_timeout_in_sec CoreIpsecConnectionTunnelManagement#dpd_timeout_in_sec}.

---

### CoreIpsecConnectionTunnelManagementEncryptionDomainConfig <a name="CoreIpsecConnectionTunnelManagementEncryptionDomainConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig.Initializer"></a>

```typescript
import { coreIpsecConnectionTunnelManagement } from 'rhizo-co-terraform-provider-oci'

const coreIpsecConnectionTunnelManagementEncryptionDomainConfig: coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig.property.cpeTrafficSelector">cpeTrafficSelector</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#cpe_traffic_selector CoreIpsecConnectionTunnelManagement#cpe_traffic_selector}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig.property.oracleTrafficSelector">oracleTrafficSelector</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_traffic_selector CoreIpsecConnectionTunnelManagement#oracle_traffic_selector}. |

---

##### `cpeTrafficSelector`<sup>Optional</sup> <a name="cpeTrafficSelector" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig.property.cpeTrafficSelector"></a>

```typescript
public readonly cpeTrafficSelector: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#cpe_traffic_selector CoreIpsecConnectionTunnelManagement#cpe_traffic_selector}.

---

##### `oracleTrafficSelector`<sup>Optional</sup> <a name="oracleTrafficSelector" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig.property.oracleTrafficSelector"></a>

```typescript
public readonly oracleTrafficSelector: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#oracle_traffic_selector CoreIpsecConnectionTunnelManagement#oracle_traffic_selector}.

---

### CoreIpsecConnectionTunnelManagementPhaseOneDetails <a name="CoreIpsecConnectionTunnelManagementPhaseOneDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.Initializer"></a>

```typescript
import { coreIpsecConnectionTunnelManagement } from 'rhizo-co-terraform-provider-oci'

const coreIpsecConnectionTunnelManagementPhaseOneDetails: coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.customAuthenticationAlgorithm">customAuthenticationAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_authentication_algorithm CoreIpsecConnectionTunnelManagement#custom_authentication_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.customDhGroup">customDhGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_dh_group CoreIpsecConnectionTunnelManagement#custom_dh_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.customEncryptionAlgorithm">customEncryptionAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_encryption_algorithm CoreIpsecConnectionTunnelManagement#custom_encryption_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.isCustomPhaseOneConfig">isCustomPhaseOneConfig</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#is_custom_phase_one_config CoreIpsecConnectionTunnelManagement#is_custom_phase_one_config}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.lifetime">lifetime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#lifetime CoreIpsecConnectionTunnelManagement#lifetime}. |

---

##### `customAuthenticationAlgorithm`<sup>Optional</sup> <a name="customAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.customAuthenticationAlgorithm"></a>

```typescript
public readonly customAuthenticationAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_authentication_algorithm CoreIpsecConnectionTunnelManagement#custom_authentication_algorithm}.

---

##### `customDhGroup`<sup>Optional</sup> <a name="customDhGroup" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.customDhGroup"></a>

```typescript
public readonly customDhGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_dh_group CoreIpsecConnectionTunnelManagement#custom_dh_group}.

---

##### `customEncryptionAlgorithm`<sup>Optional</sup> <a name="customEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.customEncryptionAlgorithm"></a>

```typescript
public readonly customEncryptionAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_encryption_algorithm CoreIpsecConnectionTunnelManagement#custom_encryption_algorithm}.

---

##### `isCustomPhaseOneConfig`<sup>Optional</sup> <a name="isCustomPhaseOneConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.isCustomPhaseOneConfig"></a>

```typescript
public readonly isCustomPhaseOneConfig: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#is_custom_phase_one_config CoreIpsecConnectionTunnelManagement#is_custom_phase_one_config}.

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails.property.lifetime"></a>

```typescript
public readonly lifetime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#lifetime CoreIpsecConnectionTunnelManagement#lifetime}.

---

### CoreIpsecConnectionTunnelManagementPhaseTwoDetails <a name="CoreIpsecConnectionTunnelManagementPhaseTwoDetails" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.Initializer"></a>

```typescript
import { coreIpsecConnectionTunnelManagement } from 'rhizo-co-terraform-provider-oci'

const coreIpsecConnectionTunnelManagementPhaseTwoDetails: coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.customAuthenticationAlgorithm">customAuthenticationAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_authentication_algorithm CoreIpsecConnectionTunnelManagement#custom_authentication_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.customEncryptionAlgorithm">customEncryptionAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_encryption_algorithm CoreIpsecConnectionTunnelManagement#custom_encryption_algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.dhGroup">dhGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dh_group CoreIpsecConnectionTunnelManagement#dh_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.isCustomPhaseTwoConfig">isCustomPhaseTwoConfig</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#is_custom_phase_two_config CoreIpsecConnectionTunnelManagement#is_custom_phase_two_config}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.isPfsEnabled">isPfsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#is_pfs_enabled CoreIpsecConnectionTunnelManagement#is_pfs_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.lifetime">lifetime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#lifetime CoreIpsecConnectionTunnelManagement#lifetime}. |

---

##### `customAuthenticationAlgorithm`<sup>Optional</sup> <a name="customAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.customAuthenticationAlgorithm"></a>

```typescript
public readonly customAuthenticationAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_authentication_algorithm CoreIpsecConnectionTunnelManagement#custom_authentication_algorithm}.

---

##### `customEncryptionAlgorithm`<sup>Optional</sup> <a name="customEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.customEncryptionAlgorithm"></a>

```typescript
public readonly customEncryptionAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#custom_encryption_algorithm CoreIpsecConnectionTunnelManagement#custom_encryption_algorithm}.

---

##### `dhGroup`<sup>Optional</sup> <a name="dhGroup" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.dhGroup"></a>

```typescript
public readonly dhGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#dh_group CoreIpsecConnectionTunnelManagement#dh_group}.

---

##### `isCustomPhaseTwoConfig`<sup>Optional</sup> <a name="isCustomPhaseTwoConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.isCustomPhaseTwoConfig"></a>

```typescript
public readonly isCustomPhaseTwoConfig: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#is_custom_phase_two_config CoreIpsecConnectionTunnelManagement#is_custom_phase_two_config}.

---

##### `isPfsEnabled`<sup>Optional</sup> <a name="isPfsEnabled" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.isPfsEnabled"></a>

```typescript
public readonly isPfsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#is_pfs_enabled CoreIpsecConnectionTunnelManagement#is_pfs_enabled}.

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails.property.lifetime"></a>

```typescript
public readonly lifetime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#lifetime CoreIpsecConnectionTunnelManagement#lifetime}.

---

### CoreIpsecConnectionTunnelManagementTimeouts <a name="CoreIpsecConnectionTunnelManagementTimeouts" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.Initializer"></a>

```typescript
import { coreIpsecConnectionTunnelManagement } from 'rhizo-co-terraform-provider-oci'

const coreIpsecConnectionTunnelManagementTimeouts: coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#create CoreIpsecConnectionTunnelManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#delete CoreIpsecConnectionTunnelManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#update CoreIpsecConnectionTunnelManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#create CoreIpsecConnectionTunnelManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#delete CoreIpsecConnectionTunnelManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_ipsec_connection_tunnel_management#update CoreIpsecConnectionTunnelManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference <a name="CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.Initializer"></a>

```typescript
import { coreIpsecConnectionTunnelManagement } from 'rhizo-co-terraform-provider-oci'

new coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetCustomerBgpAsn">resetCustomerBgpAsn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetCustomerInterfaceIp">resetCustomerInterfaceIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetCustomerInterfaceIpv6">resetCustomerInterfaceIpv6</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetOracleInterfaceIp">resetOracleInterfaceIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetOracleInterfaceIpv6">resetOracleInterfaceIpv6</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomerBgpAsn` <a name="resetCustomerBgpAsn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetCustomerBgpAsn"></a>

```typescript
public resetCustomerBgpAsn(): void
```

##### `resetCustomerInterfaceIp` <a name="resetCustomerInterfaceIp" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetCustomerInterfaceIp"></a>

```typescript
public resetCustomerInterfaceIp(): void
```

##### `resetCustomerInterfaceIpv6` <a name="resetCustomerInterfaceIpv6" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetCustomerInterfaceIpv6"></a>

```typescript
public resetCustomerInterfaceIpv6(): void
```

##### `resetOracleInterfaceIp` <a name="resetOracleInterfaceIp" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetOracleInterfaceIp"></a>

```typescript
public resetOracleInterfaceIp(): void
```

##### `resetOracleInterfaceIpv6` <a name="resetOracleInterfaceIpv6" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.resetOracleInterfaceIpv6"></a>

```typescript
public resetOracleInterfaceIpv6(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.bgpIpv6State">bgpIpv6State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.bgpState">bgpState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleBgpAsn">oracleBgpAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerBgpAsnInput">customerBgpAsnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIpInput">customerInterfaceIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIpv6Input">customerInterfaceIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIpInput">oracleInterfaceIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIpv6Input">oracleInterfaceIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerBgpAsn">customerBgpAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIp">customerInterfaceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIpv6">customerInterfaceIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIp">oracleInterfaceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIpv6">oracleInterfaceIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bgpIpv6State`<sup>Required</sup> <a name="bgpIpv6State" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.bgpIpv6State"></a>

```typescript
public readonly bgpIpv6State: string;
```

- *Type:* string

---

##### `bgpState`<sup>Required</sup> <a name="bgpState" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.bgpState"></a>

```typescript
public readonly bgpState: string;
```

- *Type:* string

---

##### `oracleBgpAsn`<sup>Required</sup> <a name="oracleBgpAsn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleBgpAsn"></a>

```typescript
public readonly oracleBgpAsn: string;
```

- *Type:* string

---

##### `customerBgpAsnInput`<sup>Optional</sup> <a name="customerBgpAsnInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerBgpAsnInput"></a>

```typescript
public readonly customerBgpAsnInput: string;
```

- *Type:* string

---

##### `customerInterfaceIpInput`<sup>Optional</sup> <a name="customerInterfaceIpInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIpInput"></a>

```typescript
public readonly customerInterfaceIpInput: string;
```

- *Type:* string

---

##### `customerInterfaceIpv6Input`<sup>Optional</sup> <a name="customerInterfaceIpv6Input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIpv6Input"></a>

```typescript
public readonly customerInterfaceIpv6Input: string;
```

- *Type:* string

---

##### `oracleInterfaceIpInput`<sup>Optional</sup> <a name="oracleInterfaceIpInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIpInput"></a>

```typescript
public readonly oracleInterfaceIpInput: string;
```

- *Type:* string

---

##### `oracleInterfaceIpv6Input`<sup>Optional</sup> <a name="oracleInterfaceIpv6Input" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIpv6Input"></a>

```typescript
public readonly oracleInterfaceIpv6Input: string;
```

- *Type:* string

---

##### `customerBgpAsn`<sup>Required</sup> <a name="customerBgpAsn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerBgpAsn"></a>

```typescript
public readonly customerBgpAsn: string;
```

- *Type:* string

---

##### `customerInterfaceIp`<sup>Required</sup> <a name="customerInterfaceIp" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIp"></a>

```typescript
public readonly customerInterfaceIp: string;
```

- *Type:* string

---

##### `customerInterfaceIpv6`<sup>Required</sup> <a name="customerInterfaceIpv6" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.customerInterfaceIpv6"></a>

```typescript
public readonly customerInterfaceIpv6: string;
```

- *Type:* string

---

##### `oracleInterfaceIp`<sup>Required</sup> <a name="oracleInterfaceIp" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIp"></a>

```typescript
public readonly oracleInterfaceIp: string;
```

- *Type:* string

---

##### `oracleInterfaceIpv6`<sup>Required</sup> <a name="oracleInterfaceIpv6" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.oracleInterfaceIpv6"></a>

```typescript
public readonly oracleInterfaceIpv6: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreIpsecConnectionTunnelManagementBgpSessionInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementBgpSessionInfo">CoreIpsecConnectionTunnelManagementBgpSessionInfo</a>

---


### CoreIpsecConnectionTunnelManagementDpdConfigList <a name="CoreIpsecConnectionTunnelManagementDpdConfigList" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer"></a>

```typescript
import { coreIpsecConnectionTunnelManagement } from 'rhizo-co-terraform-provider-oci'

new coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.get"></a>

```typescript
public get(index: number): CoreIpsecConnectionTunnelManagementDpdConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig">CoreIpsecConnectionTunnelManagementDpdConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreIpsecConnectionTunnelManagementDpdConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig">CoreIpsecConnectionTunnelManagementDpdConfig</a>[]

---


### CoreIpsecConnectionTunnelManagementDpdConfigOutputReference <a name="CoreIpsecConnectionTunnelManagementDpdConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer"></a>

```typescript
import { coreIpsecConnectionTunnelManagement } from 'rhizo-co-terraform-provider-oci'

new coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.resetDpdMode">resetDpdMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.resetDpdTimeoutInSec">resetDpdTimeoutInSec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDpdMode` <a name="resetDpdMode" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.resetDpdMode"></a>

```typescript
public resetDpdMode(): void
```

##### `resetDpdTimeoutInSec` <a name="resetDpdTimeoutInSec" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.resetDpdTimeoutInSec"></a>

```typescript
public resetDpdTimeoutInSec(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdModeInput">dpdModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdTimeoutInSecInput">dpdTimeoutInSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdMode">dpdMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdTimeoutInSec">dpdTimeoutInSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig">CoreIpsecConnectionTunnelManagementDpdConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dpdModeInput`<sup>Optional</sup> <a name="dpdModeInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdModeInput"></a>

```typescript
public readonly dpdModeInput: string;
```

- *Type:* string

---

##### `dpdTimeoutInSecInput`<sup>Optional</sup> <a name="dpdTimeoutInSecInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdTimeoutInSecInput"></a>

```typescript
public readonly dpdTimeoutInSecInput: number;
```

- *Type:* number

---

##### `dpdMode`<sup>Required</sup> <a name="dpdMode" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdMode"></a>

```typescript
public readonly dpdMode: string;
```

- *Type:* string

---

##### `dpdTimeoutInSec`<sup>Required</sup> <a name="dpdTimeoutInSec" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.dpdTimeoutInSec"></a>

```typescript
public readonly dpdTimeoutInSec: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreIpsecConnectionTunnelManagementDpdConfig;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementDpdConfig">CoreIpsecConnectionTunnelManagementDpdConfig</a>

---


### CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference <a name="CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.Initializer"></a>

```typescript
import { coreIpsecConnectionTunnelManagement } from 'rhizo-co-terraform-provider-oci'

new coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.resetCpeTrafficSelector">resetCpeTrafficSelector</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.resetOracleTrafficSelector">resetOracleTrafficSelector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpeTrafficSelector` <a name="resetCpeTrafficSelector" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.resetCpeTrafficSelector"></a>

```typescript
public resetCpeTrafficSelector(): void
```

##### `resetOracleTrafficSelector` <a name="resetOracleTrafficSelector" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.resetOracleTrafficSelector"></a>

```typescript
public resetOracleTrafficSelector(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.cpeTrafficSelectorInput">cpeTrafficSelectorInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.oracleTrafficSelectorInput">oracleTrafficSelectorInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.cpeTrafficSelector">cpeTrafficSelector</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.oracleTrafficSelector">oracleTrafficSelector</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpeTrafficSelectorInput`<sup>Optional</sup> <a name="cpeTrafficSelectorInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.cpeTrafficSelectorInput"></a>

```typescript
public readonly cpeTrafficSelectorInput: string[];
```

- *Type:* string[]

---

##### `oracleTrafficSelectorInput`<sup>Optional</sup> <a name="oracleTrafficSelectorInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.oracleTrafficSelectorInput"></a>

```typescript
public readonly oracleTrafficSelectorInput: string[];
```

- *Type:* string[]

---

##### `cpeTrafficSelector`<sup>Required</sup> <a name="cpeTrafficSelector" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.cpeTrafficSelector"></a>

```typescript
public readonly cpeTrafficSelector: string[];
```

- *Type:* string[]

---

##### `oracleTrafficSelector`<sup>Required</sup> <a name="oracleTrafficSelector" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.oracleTrafficSelector"></a>

```typescript
public readonly oracleTrafficSelector: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreIpsecConnectionTunnelManagementEncryptionDomainConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementEncryptionDomainConfig">CoreIpsecConnectionTunnelManagementEncryptionDomainConfig</a>

---


### CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference <a name="CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.Initializer"></a>

```typescript
import { coreIpsecConnectionTunnelManagement } from 'rhizo-co-terraform-provider-oci'

new coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetCustomAuthenticationAlgorithm">resetCustomAuthenticationAlgorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetCustomDhGroup">resetCustomDhGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetCustomEncryptionAlgorithm">resetCustomEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetIsCustomPhaseOneConfig">resetIsCustomPhaseOneConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetLifetime">resetLifetime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomAuthenticationAlgorithm` <a name="resetCustomAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetCustomAuthenticationAlgorithm"></a>

```typescript
public resetCustomAuthenticationAlgorithm(): void
```

##### `resetCustomDhGroup` <a name="resetCustomDhGroup" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetCustomDhGroup"></a>

```typescript
public resetCustomDhGroup(): void
```

##### `resetCustomEncryptionAlgorithm` <a name="resetCustomEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetCustomEncryptionAlgorithm"></a>

```typescript
public resetCustomEncryptionAlgorithm(): void
```

##### `resetIsCustomPhaseOneConfig` <a name="resetIsCustomPhaseOneConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetIsCustomPhaseOneConfig"></a>

```typescript
public resetIsCustomPhaseOneConfig(): void
```

##### `resetLifetime` <a name="resetLifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.resetLifetime"></a>

```typescript
public resetLifetime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.isIkeEstablished">isIkeEstablished</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.negotiatedAuthenticationAlgorithm">negotiatedAuthenticationAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.negotiatedDhGroup">negotiatedDhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.negotiatedEncryptionAlgorithm">negotiatedEncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.remainingLifetime">remainingLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.remainingLifetimeInt">remainingLifetimeInt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.remainingLifetimeLastRetrieved">remainingLifetimeLastRetrieved</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithmInput">customAuthenticationAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customDhGroupInput">customDhGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customEncryptionAlgorithmInput">customEncryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfigInput">isCustomPhaseOneConfigInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.lifetimeInput">lifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithm">customAuthenticationAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customDhGroup">customDhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customEncryptionAlgorithm">customEncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfig">isCustomPhaseOneConfig</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.lifetime">lifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isIkeEstablished`<sup>Required</sup> <a name="isIkeEstablished" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.isIkeEstablished"></a>

```typescript
public readonly isIkeEstablished: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `negotiatedAuthenticationAlgorithm`<sup>Required</sup> <a name="negotiatedAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.negotiatedAuthenticationAlgorithm"></a>

```typescript
public readonly negotiatedAuthenticationAlgorithm: string;
```

- *Type:* string

---

##### `negotiatedDhGroup`<sup>Required</sup> <a name="negotiatedDhGroup" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.negotiatedDhGroup"></a>

```typescript
public readonly negotiatedDhGroup: string;
```

- *Type:* string

---

##### `negotiatedEncryptionAlgorithm`<sup>Required</sup> <a name="negotiatedEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.negotiatedEncryptionAlgorithm"></a>

```typescript
public readonly negotiatedEncryptionAlgorithm: string;
```

- *Type:* string

---

##### `remainingLifetime`<sup>Required</sup> <a name="remainingLifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.remainingLifetime"></a>

```typescript
public readonly remainingLifetime: string;
```

- *Type:* string

---

##### `remainingLifetimeInt`<sup>Required</sup> <a name="remainingLifetimeInt" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.remainingLifetimeInt"></a>

```typescript
public readonly remainingLifetimeInt: number;
```

- *Type:* number

---

##### `remainingLifetimeLastRetrieved`<sup>Required</sup> <a name="remainingLifetimeLastRetrieved" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.remainingLifetimeLastRetrieved"></a>

```typescript
public readonly remainingLifetimeLastRetrieved: string;
```

- *Type:* string

---

##### `customAuthenticationAlgorithmInput`<sup>Optional</sup> <a name="customAuthenticationAlgorithmInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithmInput"></a>

```typescript
public readonly customAuthenticationAlgorithmInput: string;
```

- *Type:* string

---

##### `customDhGroupInput`<sup>Optional</sup> <a name="customDhGroupInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customDhGroupInput"></a>

```typescript
public readonly customDhGroupInput: string;
```

- *Type:* string

---

##### `customEncryptionAlgorithmInput`<sup>Optional</sup> <a name="customEncryptionAlgorithmInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customEncryptionAlgorithmInput"></a>

```typescript
public readonly customEncryptionAlgorithmInput: string;
```

- *Type:* string

---

##### `isCustomPhaseOneConfigInput`<sup>Optional</sup> <a name="isCustomPhaseOneConfigInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfigInput"></a>

```typescript
public readonly isCustomPhaseOneConfigInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lifetimeInput`<sup>Optional</sup> <a name="lifetimeInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.lifetimeInput"></a>

```typescript
public readonly lifetimeInput: number;
```

- *Type:* number

---

##### `customAuthenticationAlgorithm`<sup>Required</sup> <a name="customAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customAuthenticationAlgorithm"></a>

```typescript
public readonly customAuthenticationAlgorithm: string;
```

- *Type:* string

---

##### `customDhGroup`<sup>Required</sup> <a name="customDhGroup" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customDhGroup"></a>

```typescript
public readonly customDhGroup: string;
```

- *Type:* string

---

##### `customEncryptionAlgorithm`<sup>Required</sup> <a name="customEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.customEncryptionAlgorithm"></a>

```typescript
public readonly customEncryptionAlgorithm: string;
```

- *Type:* string

---

##### `isCustomPhaseOneConfig`<sup>Required</sup> <a name="isCustomPhaseOneConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.isCustomPhaseOneConfig"></a>

```typescript
public readonly isCustomPhaseOneConfig: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.lifetime"></a>

```typescript
public readonly lifetime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreIpsecConnectionTunnelManagementPhaseOneDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseOneDetails">CoreIpsecConnectionTunnelManagementPhaseOneDetails</a>

---


### CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference <a name="CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.Initializer"></a>

```typescript
import { coreIpsecConnectionTunnelManagement } from 'rhizo-co-terraform-provider-oci'

new coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetCustomAuthenticationAlgorithm">resetCustomAuthenticationAlgorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetCustomEncryptionAlgorithm">resetCustomEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetDhGroup">resetDhGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetIsCustomPhaseTwoConfig">resetIsCustomPhaseTwoConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetIsPfsEnabled">resetIsPfsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetLifetime">resetLifetime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomAuthenticationAlgorithm` <a name="resetCustomAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetCustomAuthenticationAlgorithm"></a>

```typescript
public resetCustomAuthenticationAlgorithm(): void
```

##### `resetCustomEncryptionAlgorithm` <a name="resetCustomEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetCustomEncryptionAlgorithm"></a>

```typescript
public resetCustomEncryptionAlgorithm(): void
```

##### `resetDhGroup` <a name="resetDhGroup" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetDhGroup"></a>

```typescript
public resetDhGroup(): void
```

##### `resetIsCustomPhaseTwoConfig` <a name="resetIsCustomPhaseTwoConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetIsCustomPhaseTwoConfig"></a>

```typescript
public resetIsCustomPhaseTwoConfig(): void
```

##### `resetIsPfsEnabled` <a name="resetIsPfsEnabled" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetIsPfsEnabled"></a>

```typescript
public resetIsPfsEnabled(): void
```

##### `resetLifetime` <a name="resetLifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.resetLifetime"></a>

```typescript
public resetLifetime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isEspEstablished">isEspEstablished</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.negotiatedAuthenticationAlgorithm">negotiatedAuthenticationAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.negotiatedDhGroup">negotiatedDhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.negotiatedEncryptionAlgorithm">negotiatedEncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.remainingLifetime">remainingLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.remainingLifetimeInt">remainingLifetimeInt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.remainingLifetimeLastRetrieved">remainingLifetimeLastRetrieved</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithmInput">customAuthenticationAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithmInput">customEncryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.dhGroupInput">dhGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfigInput">isCustomPhaseTwoConfigInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isPfsEnabledInput">isPfsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.lifetimeInput">lifetimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithm">customAuthenticationAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithm">customEncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.dhGroup">dhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfig">isCustomPhaseTwoConfig</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isPfsEnabled">isPfsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.lifetime">lifetime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isEspEstablished`<sup>Required</sup> <a name="isEspEstablished" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isEspEstablished"></a>

```typescript
public readonly isEspEstablished: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `negotiatedAuthenticationAlgorithm`<sup>Required</sup> <a name="negotiatedAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.negotiatedAuthenticationAlgorithm"></a>

```typescript
public readonly negotiatedAuthenticationAlgorithm: string;
```

- *Type:* string

---

##### `negotiatedDhGroup`<sup>Required</sup> <a name="negotiatedDhGroup" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.negotiatedDhGroup"></a>

```typescript
public readonly negotiatedDhGroup: string;
```

- *Type:* string

---

##### `negotiatedEncryptionAlgorithm`<sup>Required</sup> <a name="negotiatedEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.negotiatedEncryptionAlgorithm"></a>

```typescript
public readonly negotiatedEncryptionAlgorithm: string;
```

- *Type:* string

---

##### `remainingLifetime`<sup>Required</sup> <a name="remainingLifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.remainingLifetime"></a>

```typescript
public readonly remainingLifetime: string;
```

- *Type:* string

---

##### `remainingLifetimeInt`<sup>Required</sup> <a name="remainingLifetimeInt" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.remainingLifetimeInt"></a>

```typescript
public readonly remainingLifetimeInt: number;
```

- *Type:* number

---

##### `remainingLifetimeLastRetrieved`<sup>Required</sup> <a name="remainingLifetimeLastRetrieved" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.remainingLifetimeLastRetrieved"></a>

```typescript
public readonly remainingLifetimeLastRetrieved: string;
```

- *Type:* string

---

##### `customAuthenticationAlgorithmInput`<sup>Optional</sup> <a name="customAuthenticationAlgorithmInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithmInput"></a>

```typescript
public readonly customAuthenticationAlgorithmInput: string;
```

- *Type:* string

---

##### `customEncryptionAlgorithmInput`<sup>Optional</sup> <a name="customEncryptionAlgorithmInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithmInput"></a>

```typescript
public readonly customEncryptionAlgorithmInput: string;
```

- *Type:* string

---

##### `dhGroupInput`<sup>Optional</sup> <a name="dhGroupInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.dhGroupInput"></a>

```typescript
public readonly dhGroupInput: string;
```

- *Type:* string

---

##### `isCustomPhaseTwoConfigInput`<sup>Optional</sup> <a name="isCustomPhaseTwoConfigInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfigInput"></a>

```typescript
public readonly isCustomPhaseTwoConfigInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPfsEnabledInput`<sup>Optional</sup> <a name="isPfsEnabledInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isPfsEnabledInput"></a>

```typescript
public readonly isPfsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lifetimeInput`<sup>Optional</sup> <a name="lifetimeInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.lifetimeInput"></a>

```typescript
public readonly lifetimeInput: number;
```

- *Type:* number

---

##### `customAuthenticationAlgorithm`<sup>Required</sup> <a name="customAuthenticationAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customAuthenticationAlgorithm"></a>

```typescript
public readonly customAuthenticationAlgorithm: string;
```

- *Type:* string

---

##### `customEncryptionAlgorithm`<sup>Required</sup> <a name="customEncryptionAlgorithm" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.customEncryptionAlgorithm"></a>

```typescript
public readonly customEncryptionAlgorithm: string;
```

- *Type:* string

---

##### `dhGroup`<sup>Required</sup> <a name="dhGroup" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.dhGroup"></a>

```typescript
public readonly dhGroup: string;
```

- *Type:* string

---

##### `isCustomPhaseTwoConfig`<sup>Required</sup> <a name="isCustomPhaseTwoConfig" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isCustomPhaseTwoConfig"></a>

```typescript
public readonly isCustomPhaseTwoConfig: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPfsEnabled`<sup>Required</sup> <a name="isPfsEnabled" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.isPfsEnabled"></a>

```typescript
public readonly isPfsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.lifetime"></a>

```typescript
public readonly lifetime: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreIpsecConnectionTunnelManagementPhaseTwoDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementPhaseTwoDetails">CoreIpsecConnectionTunnelManagementPhaseTwoDetails</a>

---


### CoreIpsecConnectionTunnelManagementTimeoutsOutputReference <a name="CoreIpsecConnectionTunnelManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.Initializer"></a>

```typescript
import { coreIpsecConnectionTunnelManagement } from 'rhizo-co-terraform-provider-oci'

new coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts">CoreIpsecConnectionTunnelManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreIpsecConnectionTunnelManagementTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreIpsecConnectionTunnelManagement.CoreIpsecConnectionTunnelManagementTimeouts">CoreIpsecConnectionTunnelManagementTimeouts</a>

---



