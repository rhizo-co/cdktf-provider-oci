# `networkFirewallNetworkFirewallPolicyDecryptionRule` Submodule <a name="`networkFirewallNetworkFirewallPolicyDecryptionRule` Submodule" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkFirewallNetworkFirewallPolicyDecryptionRule <a name="NetworkFirewallNetworkFirewallPolicyDecryptionRule" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule oci_network_firewall_network_firewall_policy_decryption_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.Initializer"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyDecryptionRule } from 'rhizo-co-terraform-provider-oci'

new networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule(scope: Construct, id: string, config: NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig">NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig">NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.putPosition">putPosition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetDecryptionProfile">resetDecryptionProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetPosition">resetPosition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetPriorityOrder">resetPriorityOrder</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.putCondition"></a>

```typescript
public putCondition(value: NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.putCondition.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition">NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition</a>

---

##### `putPosition` <a name="putPosition" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.putPosition"></a>

```typescript
public putPosition(value: NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.putPosition.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition">NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts</a>

---

##### `resetDecryptionProfile` <a name="resetDecryptionProfile" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetDecryptionProfile"></a>

```typescript
public resetDecryptionProfile(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPosition` <a name="resetPosition" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetPosition"></a>

```typescript
public resetPosition(): void
```

##### `resetPriorityOrder` <a name="resetPriorityOrder" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetPriorityOrder"></a>

```typescript
public resetPriorityOrder(): void
```

##### `resetSecret` <a name="resetSecret" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetSecret"></a>

```typescript
public resetSecret(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyDecryptionRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.isConstruct"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyDecryptionRule } from 'rhizo-co-terraform-provider-oci'

networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.isTerraformElement"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyDecryptionRule } from 'rhizo-co-terraform-provider-oci'

networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.isTerraformResource"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyDecryptionRule } from 'rhizo-co-terraform-provider-oci'

networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.generateConfigForImport"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyDecryptionRule } from 'rhizo-co-terraform-provider-oci'

networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkFirewallNetworkFirewallPolicyDecryptionRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkFirewallNetworkFirewallPolicyDecryptionRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkFirewallNetworkFirewallPolicyDecryptionRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkFirewallNetworkFirewallPolicyDecryptionRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.condition">condition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference">NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.parentResourceId">parentResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.position">position</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference">NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference">NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.conditionInput">conditionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition">NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.decryptionProfileInput">decryptionProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.networkFirewallPolicyIdInput">networkFirewallPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.positionInput">positionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition">NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.priorityOrderInput">priorityOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.secretInput">secretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.decryptionProfile">decryptionProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.networkFirewallPolicyId">networkFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.priorityOrder">priorityOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.secret">secret</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.condition"></a>

```typescript
public readonly condition: NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference">NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference</a>

---

##### `parentResourceId`<sup>Required</sup> <a name="parentResourceId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.parentResourceId"></a>

```typescript
public readonly parentResourceId: string;
```

- *Type:* string

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.position"></a>

```typescript
public readonly position: NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference">NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference">NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.conditionInput"></a>

```typescript
public readonly conditionInput: NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition">NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition</a>

---

##### `decryptionProfileInput`<sup>Optional</sup> <a name="decryptionProfileInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.decryptionProfileInput"></a>

```typescript
public readonly decryptionProfileInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkFirewallPolicyIdInput`<sup>Optional</sup> <a name="networkFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.networkFirewallPolicyIdInput"></a>

```typescript
public readonly networkFirewallPolicyIdInput: string;
```

- *Type:* string

---

##### `positionInput`<sup>Optional</sup> <a name="positionInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.positionInput"></a>

```typescript
public readonly positionInput: NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition">NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition</a>

---

##### `priorityOrderInput`<sup>Optional</sup> <a name="priorityOrderInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.priorityOrderInput"></a>

```typescript
public readonly priorityOrderInput: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.secretInput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `decryptionProfile`<sup>Required</sup> <a name="decryptionProfile" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.decryptionProfile"></a>

```typescript
public readonly decryptionProfile: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkFirewallPolicyId`<sup>Required</sup> <a name="networkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.networkFirewallPolicyId"></a>

```typescript
public readonly networkFirewallPolicyId: string;
```

- *Type:* string

---

##### `priorityOrder`<sup>Required</sup> <a name="priorityOrder" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.priorityOrder"></a>

```typescript
public readonly priorityOrder: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition <a name="NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition.Initializer"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyDecryptionRule } from 'rhizo-co-terraform-provider-oci'

const networkFirewallNetworkFirewallPolicyDecryptionRuleCondition: networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition.property.destinationAddress">destinationAddress</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#destination_address NetworkFirewallNetworkFirewallPolicyDecryptionRule#destination_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition.property.sourceAddress">sourceAddress</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#source_address NetworkFirewallNetworkFirewallPolicyDecryptionRule#source_address}. |

---

##### `destinationAddress`<sup>Optional</sup> <a name="destinationAddress" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition.property.destinationAddress"></a>

```typescript
public readonly destinationAddress: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#destination_address NetworkFirewallNetworkFirewallPolicyDecryptionRule#destination_address}.

---

##### `sourceAddress`<sup>Optional</sup> <a name="sourceAddress" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition.property.sourceAddress"></a>

```typescript
public readonly sourceAddress: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#source_address NetworkFirewallNetworkFirewallPolicyDecryptionRule#source_address}.

---

### NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig <a name="NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.Initializer"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyDecryptionRule } from 'rhizo-co-terraform-provider-oci'

const networkFirewallNetworkFirewallPolicyDecryptionRuleConfig: networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#action NetworkFirewallNetworkFirewallPolicyDecryptionRule#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.condition">condition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition">NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition</a></code> | condition block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#name NetworkFirewallNetworkFirewallPolicyDecryptionRule#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.networkFirewallPolicyId">networkFirewallPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyDecryptionRule#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.decryptionProfile">decryptionProfile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#decryption_profile NetworkFirewallNetworkFirewallPolicyDecryptionRule#decryption_profile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#id NetworkFirewallNetworkFirewallPolicyDecryptionRule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.position">position</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition">NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition</a></code> | position block. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.priorityOrder">priorityOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#priority_order NetworkFirewallNetworkFirewallPolicyDecryptionRule#priority_order}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.secret">secret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#secret NetworkFirewallNetworkFirewallPolicyDecryptionRule#secret}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#action NetworkFirewallNetworkFirewallPolicyDecryptionRule#action}.

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.condition"></a>

```typescript
public readonly condition: NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition">NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#condition NetworkFirewallNetworkFirewallPolicyDecryptionRule#condition}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#name NetworkFirewallNetworkFirewallPolicyDecryptionRule#name}.

---

##### `networkFirewallPolicyId`<sup>Required</sup> <a name="networkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.networkFirewallPolicyId"></a>

```typescript
public readonly networkFirewallPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#network_firewall_policy_id NetworkFirewallNetworkFirewallPolicyDecryptionRule#network_firewall_policy_id}.

---

##### `decryptionProfile`<sup>Optional</sup> <a name="decryptionProfile" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.decryptionProfile"></a>

```typescript
public readonly decryptionProfile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#decryption_profile NetworkFirewallNetworkFirewallPolicyDecryptionRule#decryption_profile}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#id NetworkFirewallNetworkFirewallPolicyDecryptionRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `position`<sup>Optional</sup> <a name="position" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.position"></a>

```typescript
public readonly position: NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition">NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition</a>

position block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#position NetworkFirewallNetworkFirewallPolicyDecryptionRule#position}

---

##### `priorityOrder`<sup>Optional</sup> <a name="priorityOrder" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.priorityOrder"></a>

```typescript
public readonly priorityOrder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#priority_order NetworkFirewallNetworkFirewallPolicyDecryptionRule#priority_order}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#secret NetworkFirewallNetworkFirewallPolicyDecryptionRule#secret}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#timeouts NetworkFirewallNetworkFirewallPolicyDecryptionRule#timeouts}

---

### NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition <a name="NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition.Initializer"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyDecryptionRule } from 'rhizo-co-terraform-provider-oci'

const networkFirewallNetworkFirewallPolicyDecryptionRulePosition: networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition.property.afterRule">afterRule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#after_rule NetworkFirewallNetworkFirewallPolicyDecryptionRule#after_rule}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition.property.beforeRule">beforeRule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#before_rule NetworkFirewallNetworkFirewallPolicyDecryptionRule#before_rule}. |

---

##### `afterRule`<sup>Optional</sup> <a name="afterRule" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition.property.afterRule"></a>

```typescript
public readonly afterRule: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#after_rule NetworkFirewallNetworkFirewallPolicyDecryptionRule#after_rule}.

---

##### `beforeRule`<sup>Optional</sup> <a name="beforeRule" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition.property.beforeRule"></a>

```typescript
public readonly beforeRule: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#before_rule NetworkFirewallNetworkFirewallPolicyDecryptionRule#before_rule}.

---

### NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts <a name="NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts.Initializer"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyDecryptionRule } from 'rhizo-co-terraform-provider-oci'

const networkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts: networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#create NetworkFirewallNetworkFirewallPolicyDecryptionRule#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#delete NetworkFirewallNetworkFirewallPolicyDecryptionRule#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#update NetworkFirewallNetworkFirewallPolicyDecryptionRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#create NetworkFirewallNetworkFirewallPolicyDecryptionRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#delete NetworkFirewallNetworkFirewallPolicyDecryptionRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/network_firewall_network_firewall_policy_decryption_rule#update NetworkFirewallNetworkFirewallPolicyDecryptionRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference <a name="NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.Initializer"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyDecryptionRule } from 'rhizo-co-terraform-provider-oci'

new networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.resetDestinationAddress">resetDestinationAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.resetSourceAddress">resetSourceAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationAddress` <a name="resetDestinationAddress" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.resetDestinationAddress"></a>

```typescript
public resetDestinationAddress(): void
```

##### `resetSourceAddress` <a name="resetSourceAddress" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.resetSourceAddress"></a>

```typescript
public resetSourceAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.destinationAddressInput">destinationAddressInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.sourceAddressInput">sourceAddressInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.destinationAddress">destinationAddress</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.sourceAddress">sourceAddress</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition">NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationAddressInput`<sup>Optional</sup> <a name="destinationAddressInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.destinationAddressInput"></a>

```typescript
public readonly destinationAddressInput: string[];
```

- *Type:* string[]

---

##### `sourceAddressInput`<sup>Optional</sup> <a name="sourceAddressInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.sourceAddressInput"></a>

```typescript
public readonly sourceAddressInput: string[];
```

- *Type:* string[]

---

##### `destinationAddress`<sup>Required</sup> <a name="destinationAddress" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.destinationAddress"></a>

```typescript
public readonly destinationAddress: string[];
```

- *Type:* string[]

---

##### `sourceAddress`<sup>Required</sup> <a name="sourceAddress" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.sourceAddress"></a>

```typescript
public readonly sourceAddress: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition">NetworkFirewallNetworkFirewallPolicyDecryptionRuleCondition</a>

---


### NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference <a name="NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.Initializer"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyDecryptionRule } from 'rhizo-co-terraform-provider-oci'

new networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.resetAfterRule">resetAfterRule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.resetBeforeRule">resetBeforeRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAfterRule` <a name="resetAfterRule" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.resetAfterRule"></a>

```typescript
public resetAfterRule(): void
```

##### `resetBeforeRule` <a name="resetBeforeRule" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.resetBeforeRule"></a>

```typescript
public resetBeforeRule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.afterRuleInput">afterRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.beforeRuleInput">beforeRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.afterRule">afterRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.beforeRule">beforeRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition">NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `afterRuleInput`<sup>Optional</sup> <a name="afterRuleInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.afterRuleInput"></a>

```typescript
public readonly afterRuleInput: string;
```

- *Type:* string

---

##### `beforeRuleInput`<sup>Optional</sup> <a name="beforeRuleInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.beforeRuleInput"></a>

```typescript
public readonly beforeRuleInput: string;
```

- *Type:* string

---

##### `afterRule`<sup>Required</sup> <a name="afterRule" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.afterRule"></a>

```typescript
public readonly afterRule: string;
```

- *Type:* string

---

##### `beforeRule`<sup>Required</sup> <a name="beforeRule" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.beforeRule"></a>

```typescript
public readonly beforeRule: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePositionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition">NetworkFirewallNetworkFirewallPolicyDecryptionRulePosition</a>

---


### NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference <a name="NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkFirewallNetworkFirewallPolicyDecryptionRule } from 'rhizo-co-terraform-provider-oci'

new networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.networkFirewallNetworkFirewallPolicyDecryptionRule.NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts">NetworkFirewallNetworkFirewallPolicyDecryptionRuleTimeouts</a>

---



