# `networkFirewallNetworkFirewallPolicyDecryptionProfile` Submodule <a name="`networkFirewallNetworkFirewallPolicyDecryptionProfile` Submodule" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkFirewallNetworkFirewallPolicyDecryptionProfile <a name="NetworkFirewallNetworkFirewallPolicyDecryptionProfile" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile oci_network_firewall_network_firewall_policy_decryption_profile}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyDecryptionProfile } from 'rhizo-co-terraform-provider-oci'

new networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile(scope: Construct, id: string, config: NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig">NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig">NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetAreCertificateExtensionsRestricted">resetAreCertificateExtensionsRestricted</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsAutoIncludeAltName">resetIsAutoIncludeAltName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsExpiredCertificateBlocked">resetIsExpiredCertificateBlocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsOutOfCapacityBlocked">resetIsOutOfCapacityBlocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsRevocationStatusTimeoutBlocked">resetIsRevocationStatusTimeoutBlocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUnknownRevocationStatusBlocked">resetIsUnknownRevocationStatusBlocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUnsupportedCipherBlocked">resetIsUnsupportedCipherBlocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUnsupportedVersionBlocked">resetIsUnsupportedVersionBlocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUntrustedIssuerBlocked">resetIsUntrustedIssuerBlocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a>

---

##### `resetAreCertificateExtensionsRestricted` <a name="resetAreCertificateExtensionsRestricted" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetAreCertificateExtensionsRestricted"></a>

```typescript
public resetAreCertificateExtensionsRestricted(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsAutoIncludeAltName` <a name="resetIsAutoIncludeAltName" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsAutoIncludeAltName"></a>

```typescript
public resetIsAutoIncludeAltName(): void
```

##### `resetIsExpiredCertificateBlocked` <a name="resetIsExpiredCertificateBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsExpiredCertificateBlocked"></a>

```typescript
public resetIsExpiredCertificateBlocked(): void
```

##### `resetIsOutOfCapacityBlocked` <a name="resetIsOutOfCapacityBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsOutOfCapacityBlocked"></a>

```typescript
public resetIsOutOfCapacityBlocked(): void
```

##### `resetIsRevocationStatusTimeoutBlocked` <a name="resetIsRevocationStatusTimeoutBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsRevocationStatusTimeoutBlocked"></a>

```typescript
public resetIsRevocationStatusTimeoutBlocked(): void
```

##### `resetIsUnknownRevocationStatusBlocked` <a name="resetIsUnknownRevocationStatusBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUnknownRevocationStatusBlocked"></a>

```typescript
public resetIsUnknownRevocationStatusBlocked(): void
```

##### `resetIsUnsupportedCipherBlocked` <a name="resetIsUnsupportedCipherBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUnsupportedCipherBlocked"></a>

```typescript
public resetIsUnsupportedCipherBlocked(): void
```

##### `resetIsUnsupportedVersionBlocked` <a name="resetIsUnsupportedVersionBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUnsupportedVersionBlocked"></a>

```typescript
public resetIsUnsupportedVersionBlocked(): void
```

##### `resetIsUntrustedIssuerBlocked` <a name="resetIsUntrustedIssuerBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetIsUntrustedIssuerBlocked"></a>

```typescript
public resetIsUntrustedIssuerBlocked(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyDecryptionProfile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isConstruct"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyDecryptionProfile } from 'rhizo-co-terraform-provider-oci'

networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformElement"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyDecryptionProfile } from 'rhizo-co-terraform-provider-oci'

networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformResource"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyDecryptionProfile } from 'rhizo-co-terraform-provider-oci'

networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyDecryptionProfile } from 'rhizo-co-terraform-provider-oci'

networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyDecryptionProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkFirewallNetworkFirewallPolicyDecryptionProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkFirewallNetworkFirewallPolicyDecryptionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkFirewallNetworkFirewallPolicyDecryptionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.parentResourceId">parentResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.areCertificateExtensionsRestrictedInput">areCertificateExtensionsRestrictedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isAutoIncludeAltNameInput">isAutoIncludeAltNameInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isExpiredCertificateBlockedInput">isExpiredCertificateBlockedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isOutOfCapacityBlockedInput">isOutOfCapacityBlockedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isRevocationStatusTimeoutBlockedInput">isRevocationStatusTimeoutBlockedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnknownRevocationStatusBlockedInput">isUnknownRevocationStatusBlockedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedCipherBlockedInput">isUnsupportedCipherBlockedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedVersionBlockedInput">isUnsupportedVersionBlockedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUntrustedIssuerBlockedInput">isUntrustedIssuerBlockedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.networkFirewallPolicyIdInput">networkFirewallPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.areCertificateExtensionsRestricted">areCertificateExtensionsRestricted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isAutoIncludeAltName">isAutoIncludeAltName</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isExpiredCertificateBlocked">isExpiredCertificateBlocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isOutOfCapacityBlocked">isOutOfCapacityBlocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isRevocationStatusTimeoutBlocked">isRevocationStatusTimeoutBlocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnknownRevocationStatusBlocked">isUnknownRevocationStatusBlocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedCipherBlocked">isUnsupportedCipherBlocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedVersionBlocked">isUnsupportedVersionBlocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUntrustedIssuerBlocked">isUntrustedIssuerBlocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.networkFirewallPolicyId">networkFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `parentResourceId`<sup>Required</sup> <a name="parentResourceId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.parentResourceId"></a>

```typescript
public readonly parentResourceId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference</a>

---

##### `areCertificateExtensionsRestrictedInput`<sup>Optional</sup> <a name="areCertificateExtensionsRestrictedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.areCertificateExtensionsRestrictedInput"></a>

```typescript
public readonly areCertificateExtensionsRestrictedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isAutoIncludeAltNameInput`<sup>Optional</sup> <a name="isAutoIncludeAltNameInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isAutoIncludeAltNameInput"></a>

```typescript
public readonly isAutoIncludeAltNameInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isExpiredCertificateBlockedInput`<sup>Optional</sup> <a name="isExpiredCertificateBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isExpiredCertificateBlockedInput"></a>

```typescript
public readonly isExpiredCertificateBlockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isOutOfCapacityBlockedInput`<sup>Optional</sup> <a name="isOutOfCapacityBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isOutOfCapacityBlockedInput"></a>

```typescript
public readonly isOutOfCapacityBlockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRevocationStatusTimeoutBlockedInput`<sup>Optional</sup> <a name="isRevocationStatusTimeoutBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isRevocationStatusTimeoutBlockedInput"></a>

```typescript
public readonly isRevocationStatusTimeoutBlockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isUnknownRevocationStatusBlockedInput`<sup>Optional</sup> <a name="isUnknownRevocationStatusBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnknownRevocationStatusBlockedInput"></a>

```typescript
public readonly isUnknownRevocationStatusBlockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isUnsupportedCipherBlockedInput`<sup>Optional</sup> <a name="isUnsupportedCipherBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedCipherBlockedInput"></a>

```typescript
public readonly isUnsupportedCipherBlockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isUnsupportedVersionBlockedInput`<sup>Optional</sup> <a name="isUnsupportedVersionBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedVersionBlockedInput"></a>

```typescript
public readonly isUnsupportedVersionBlockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isUntrustedIssuerBlockedInput`<sup>Optional</sup> <a name="isUntrustedIssuerBlockedInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUntrustedIssuerBlockedInput"></a>

```typescript
public readonly isUntrustedIssuerBlockedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkFirewallPolicyIdInput`<sup>Optional</sup> <a name="networkFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.networkFirewallPolicyIdInput"></a>

```typescript
public readonly networkFirewallPolicyIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `areCertificateExtensionsRestricted`<sup>Required</sup> <a name="areCertificateExtensionsRestricted" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.areCertificateExtensionsRestricted"></a>

```typescript
public readonly areCertificateExtensionsRestricted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isAutoIncludeAltName`<sup>Required</sup> <a name="isAutoIncludeAltName" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isAutoIncludeAltName"></a>

```typescript
public readonly isAutoIncludeAltName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isExpiredCertificateBlocked`<sup>Required</sup> <a name="isExpiredCertificateBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isExpiredCertificateBlocked"></a>

```typescript
public readonly isExpiredCertificateBlocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isOutOfCapacityBlocked`<sup>Required</sup> <a name="isOutOfCapacityBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isOutOfCapacityBlocked"></a>

```typescript
public readonly isOutOfCapacityBlocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRevocationStatusTimeoutBlocked`<sup>Required</sup> <a name="isRevocationStatusTimeoutBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isRevocationStatusTimeoutBlocked"></a>

```typescript
public readonly isRevocationStatusTimeoutBlocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isUnknownRevocationStatusBlocked`<sup>Required</sup> <a name="isUnknownRevocationStatusBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnknownRevocationStatusBlocked"></a>

```typescript
public readonly isUnknownRevocationStatusBlocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isUnsupportedCipherBlocked`<sup>Required</sup> <a name="isUnsupportedCipherBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedCipherBlocked"></a>

```typescript
public readonly isUnsupportedCipherBlocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isUnsupportedVersionBlocked`<sup>Required</sup> <a name="isUnsupportedVersionBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUnsupportedVersionBlocked"></a>

```typescript
public readonly isUnsupportedVersionBlocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isUntrustedIssuerBlocked`<sup>Required</sup> <a name="isUntrustedIssuerBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.isUntrustedIssuerBlocked"></a>

```typescript
public readonly isUntrustedIssuerBlocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkFirewallPolicyId`<sup>Required</sup> <a name="networkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.networkFirewallPolicyId"></a>

```typescript
public readonly networkFirewallPolicyId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig <a name="NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.Initializer"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyDecryptionProfile } from 'rhizo-co-terraform-provider-oci'

const networkFirewallNetworkFirewallPolicyDecryptionProfileConfig: networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.networkFirewallPolicyId">networkFirewallPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#type NetworkFirewallNetworkFirewallPolicyDecryptionProfile#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.areCertificateExtensionsRestricted">areCertificateExtensionsRestricted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#are_certificate_extensions_restricted NetworkFirewallNetworkFirewallPolicyDecryptionProfile#are_certificate_extensions_restricted}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isAutoIncludeAltName">isAutoIncludeAltName</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_auto_include_alt_name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_auto_include_alt_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isExpiredCertificateBlocked">isExpiredCertificateBlocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_expired_certificate_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_expired_certificate_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isOutOfCapacityBlocked">isOutOfCapacityBlocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_out_of_capacity_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_out_of_capacity_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isRevocationStatusTimeoutBlocked">isRevocationStatusTimeoutBlocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_revocation_status_timeout_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_revocation_status_timeout_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnknownRevocationStatusBlocked">isUnknownRevocationStatusBlocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unknown_revocation_status_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unknown_revocation_status_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnsupportedCipherBlocked">isUnsupportedCipherBlocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_cipher_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_cipher_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnsupportedVersionBlocked">isUnsupportedVersionBlocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_version_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_version_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUntrustedIssuerBlocked">isUntrustedIssuerBlocked</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_untrusted_issuer_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_untrusted_issuer_blocked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#name}.

---

##### `networkFirewallPolicyId`<sup>Required</sup> <a name="networkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.networkFirewallPolicyId"></a>

```typescript
public readonly networkFirewallPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#network_firewall_policy_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#type NetworkFirewallNetworkFirewallPolicyDecryptionProfile#type}.

---

##### `areCertificateExtensionsRestricted`<sup>Optional</sup> <a name="areCertificateExtensionsRestricted" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.areCertificateExtensionsRestricted"></a>

```typescript
public readonly areCertificateExtensionsRestricted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#are_certificate_extensions_restricted NetworkFirewallNetworkFirewallPolicyDecryptionProfile#are_certificate_extensions_restricted}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#id NetworkFirewallNetworkFirewallPolicyDecryptionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isAutoIncludeAltName`<sup>Optional</sup> <a name="isAutoIncludeAltName" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isAutoIncludeAltName"></a>

```typescript
public readonly isAutoIncludeAltName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_auto_include_alt_name NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_auto_include_alt_name}.

---

##### `isExpiredCertificateBlocked`<sup>Optional</sup> <a name="isExpiredCertificateBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isExpiredCertificateBlocked"></a>

```typescript
public readonly isExpiredCertificateBlocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_expired_certificate_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_expired_certificate_blocked}.

---

##### `isOutOfCapacityBlocked`<sup>Optional</sup> <a name="isOutOfCapacityBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isOutOfCapacityBlocked"></a>

```typescript
public readonly isOutOfCapacityBlocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_out_of_capacity_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_out_of_capacity_blocked}.

---

##### `isRevocationStatusTimeoutBlocked`<sup>Optional</sup> <a name="isRevocationStatusTimeoutBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isRevocationStatusTimeoutBlocked"></a>

```typescript
public readonly isRevocationStatusTimeoutBlocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_revocation_status_timeout_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_revocation_status_timeout_blocked}.

---

##### `isUnknownRevocationStatusBlocked`<sup>Optional</sup> <a name="isUnknownRevocationStatusBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnknownRevocationStatusBlocked"></a>

```typescript
public readonly isUnknownRevocationStatusBlocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unknown_revocation_status_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unknown_revocation_status_blocked}.

---

##### `isUnsupportedCipherBlocked`<sup>Optional</sup> <a name="isUnsupportedCipherBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnsupportedCipherBlocked"></a>

```typescript
public readonly isUnsupportedCipherBlocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_cipher_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_cipher_blocked}.

---

##### `isUnsupportedVersionBlocked`<sup>Optional</sup> <a name="isUnsupportedVersionBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUnsupportedVersionBlocked"></a>

```typescript
public readonly isUnsupportedVersionBlocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_unsupported_version_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_unsupported_version_blocked}.

---

##### `isUntrustedIssuerBlocked`<sup>Optional</sup> <a name="isUntrustedIssuerBlocked" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.isUntrustedIssuerBlocked"></a>

```typescript
public readonly isUntrustedIssuerBlocked: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#is_untrusted_issuer_blocked NetworkFirewallNetworkFirewallPolicyDecryptionProfile#is_untrusted_issuer_blocked}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#timeouts NetworkFirewallNetworkFirewallPolicyDecryptionProfile#timeouts}

---

### NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts <a name="NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.Initializer"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyDecryptionProfile } from 'rhizo-co-terraform-provider-oci'

const networkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts: networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#create NetworkFirewallNetworkFirewallPolicyDecryptionProfile#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#delete NetworkFirewallNetworkFirewallPolicyDecryptionProfile#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#update NetworkFirewallNetworkFirewallPolicyDecryptionProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#create NetworkFirewallNetworkFirewallPolicyDecryptionProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#delete NetworkFirewallNetworkFirewallPolicyDecryptionProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_profile#update NetworkFirewallNetworkFirewallPolicyDecryptionProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference <a name="NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyDecryptionProfile } from 'rhizo-co-terraform-provider-oci'

new networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionProfile.NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionProfileTimeouts</a>

---



