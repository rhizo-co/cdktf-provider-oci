# `coreNetworkSecurityGroupSecurityRule` Submodule <a name="`coreNetworkSecurityGroupSecurityRule` Submodule" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreNetworkSecurityGroupSecurityRule <a name="CoreNetworkSecurityGroupSecurityRule" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule oci_core_network_security_group_security_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer"></a>

```typescript
import { coreNetworkSecurityGroupSecurityRule } from 'rhizo-co-terraform-provider-oci'

new coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule(scope: Construct, id: string, config: CoreNetworkSecurityGroupSecurityRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig">CoreNetworkSecurityGroupSecurityRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig">CoreNetworkSecurityGroupSecurityRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putIcmpOptions">putIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putTcpOptions">putTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putUdpOptions">putUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetDestinationType">resetDestinationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetIcmpOptions">resetIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetSourceType">resetSourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetStateless">resetStateless</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetTcpOptions">resetTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetUdpOptions">resetUdpOptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIcmpOptions` <a name="putIcmpOptions" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putIcmpOptions"></a>

```typescript
public putIcmpOptions(value: CoreNetworkSecurityGroupSecurityRuleIcmpOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putIcmpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions">CoreNetworkSecurityGroupSecurityRuleIcmpOptions</a>

---

##### `putTcpOptions` <a name="putTcpOptions" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putTcpOptions"></a>

```typescript
public putTcpOptions(value: CoreNetworkSecurityGroupSecurityRuleTcpOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putTcpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions">CoreNetworkSecurityGroupSecurityRuleTcpOptions</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putTimeouts"></a>

```typescript
public putTimeouts(value: CoreNetworkSecurityGroupSecurityRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts">CoreNetworkSecurityGroupSecurityRuleTimeouts</a>

---

##### `putUdpOptions` <a name="putUdpOptions" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putUdpOptions"></a>

```typescript
public putUdpOptions(value: CoreNetworkSecurityGroupSecurityRuleUdpOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.putUdpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions">CoreNetworkSecurityGroupSecurityRuleUdpOptions</a>

---

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDestination` <a name="resetDestination" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetDestination"></a>

```typescript
public resetDestination(): void
```

##### `resetDestinationType` <a name="resetDestinationType" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetDestinationType"></a>

```typescript
public resetDestinationType(): void
```

##### `resetIcmpOptions` <a name="resetIcmpOptions" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetIcmpOptions"></a>

```typescript
public resetIcmpOptions(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSource` <a name="resetSource" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetSourceType` <a name="resetSourceType" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetSourceType"></a>

```typescript
public resetSourceType(): void
```

##### `resetStateless` <a name="resetStateless" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetStateless"></a>

```typescript
public resetStateless(): void
```

##### `resetTcpOptions` <a name="resetTcpOptions" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetTcpOptions"></a>

```typescript
public resetTcpOptions(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUdpOptions` <a name="resetUdpOptions" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.resetUdpOptions"></a>

```typescript
public resetUdpOptions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreNetworkSecurityGroupSecurityRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.isConstruct"></a>

```typescript
import { coreNetworkSecurityGroupSecurityRule } from 'rhizo-co-terraform-provider-oci'

coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.isTerraformElement"></a>

```typescript
import { coreNetworkSecurityGroupSecurityRule } from 'rhizo-co-terraform-provider-oci'

coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.isTerraformResource"></a>

```typescript
import { coreNetworkSecurityGroupSecurityRule } from 'rhizo-co-terraform-provider-oci'

coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.generateConfigForImport"></a>

```typescript
import { coreNetworkSecurityGroupSecurityRule } from 'rhizo-co-terraform-provider-oci'

coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CoreNetworkSecurityGroupSecurityRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreNetworkSecurityGroupSecurityRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreNetworkSecurityGroupSecurityRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreNetworkSecurityGroupSecurityRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference">CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.isValid">isValid</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference">CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference">CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference">CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.destinationTypeInput">destinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.icmpOptionsInput">icmpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions">CoreNetworkSecurityGroupSecurityRuleIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.networkSecurityGroupIdInput">networkSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.sourceTypeInput">sourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.statelessInput">statelessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.tcpOptionsInput">tcpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions">CoreNetworkSecurityGroupSecurityRuleTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts">CoreNetworkSecurityGroupSecurityRuleTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.udpOptionsInput">udpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions">CoreNetworkSecurityGroupSecurityRuleUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.destinationType">destinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.networkSecurityGroupId">networkSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.stateless">stateless</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `icmpOptions`<sup>Required</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.icmpOptions"></a>

```typescript
public readonly icmpOptions: CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference">CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference</a>

---

##### `isValid`<sup>Required</sup> <a name="isValid" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.isValid"></a>

```typescript
public readonly isValid: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `tcpOptions`<sup>Required</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.tcpOptions"></a>

```typescript
public readonly tcpOptions: CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference">CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.timeouts"></a>

```typescript
public readonly timeouts: CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference">CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference</a>

---

##### `udpOptions`<sup>Required</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.udpOptions"></a>

```typescript
public readonly udpOptions: CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference">CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.destinationTypeInput"></a>

```typescript
public readonly destinationTypeInput: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `icmpOptionsInput`<sup>Optional</sup> <a name="icmpOptionsInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.icmpOptionsInput"></a>

```typescript
public readonly icmpOptionsInput: CoreNetworkSecurityGroupSecurityRuleIcmpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions">CoreNetworkSecurityGroupSecurityRuleIcmpOptions</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `networkSecurityGroupIdInput`<sup>Optional</sup> <a name="networkSecurityGroupIdInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.networkSecurityGroupIdInput"></a>

```typescript
public readonly networkSecurityGroupIdInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string;
```

- *Type:* string

---

##### `statelessInput`<sup>Optional</sup> <a name="statelessInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.statelessInput"></a>

```typescript
public readonly statelessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tcpOptionsInput`<sup>Optional</sup> <a name="tcpOptionsInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.tcpOptionsInput"></a>

```typescript
public readonly tcpOptionsInput: CoreNetworkSecurityGroupSecurityRuleTcpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions">CoreNetworkSecurityGroupSecurityRuleTcpOptions</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CoreNetworkSecurityGroupSecurityRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts">CoreNetworkSecurityGroupSecurityRuleTimeouts</a>

---

##### `udpOptionsInput`<sup>Optional</sup> <a name="udpOptionsInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.udpOptionsInput"></a>

```typescript
public readonly udpOptionsInput: CoreNetworkSecurityGroupSecurityRuleUdpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions">CoreNetworkSecurityGroupSecurityRuleUdpOptions</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networkSecurityGroupId`<sup>Required</sup> <a name="networkSecurityGroupId" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.networkSecurityGroupId"></a>

```typescript
public readonly networkSecurityGroupId: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `stateless`<sup>Required</sup> <a name="stateless" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.stateless"></a>

```typescript
public readonly stateless: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreNetworkSecurityGroupSecurityRuleConfig <a name="CoreNetworkSecurityGroupSecurityRuleConfig" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.Initializer"></a>

```typescript
import { coreNetworkSecurityGroupSecurityRule } from 'rhizo-co-terraform-provider-oci'

const coreNetworkSecurityGroupSecurityRuleConfig: coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.direction">direction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#direction CoreNetworkSecurityGroupSecurityRule#direction}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.networkSecurityGroupId">networkSecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#network_security_group_id CoreNetworkSecurityGroupSecurityRule#network_security_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#protocol CoreNetworkSecurityGroupSecurityRule#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#description CoreNetworkSecurityGroupSecurityRule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#destination CoreNetworkSecurityGroupSecurityRule#destination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.destinationType">destinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#destination_type CoreNetworkSecurityGroupSecurityRule#destination_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.icmpOptions">icmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions">CoreNetworkSecurityGroupSecurityRuleIcmpOptions</a></code> | icmp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#id CoreNetworkSecurityGroupSecurityRule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#source CoreNetworkSecurityGroupSecurityRule#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.sourceType">sourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#source_type CoreNetworkSecurityGroupSecurityRule#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.stateless">stateless</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#stateless CoreNetworkSecurityGroupSecurityRule#stateless}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.tcpOptions">tcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions">CoreNetworkSecurityGroupSecurityRuleTcpOptions</a></code> | tcp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts">CoreNetworkSecurityGroupSecurityRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.udpOptions">udpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions">CoreNetworkSecurityGroupSecurityRuleUdpOptions</a></code> | udp_options block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `direction`<sup>Required</sup> <a name="direction" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#direction CoreNetworkSecurityGroupSecurityRule#direction}.

---

##### `networkSecurityGroupId`<sup>Required</sup> <a name="networkSecurityGroupId" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.networkSecurityGroupId"></a>

```typescript
public readonly networkSecurityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#network_security_group_id CoreNetworkSecurityGroupSecurityRule#network_security_group_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#protocol CoreNetworkSecurityGroupSecurityRule#protocol}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#description CoreNetworkSecurityGroupSecurityRule#description}.

---

##### `destination`<sup>Optional</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#destination CoreNetworkSecurityGroupSecurityRule#destination}.

---

##### `destinationType`<sup>Optional</sup> <a name="destinationType" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#destination_type CoreNetworkSecurityGroupSecurityRule#destination_type}.

---

##### `icmpOptions`<sup>Optional</sup> <a name="icmpOptions" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.icmpOptions"></a>

```typescript
public readonly icmpOptions: CoreNetworkSecurityGroupSecurityRuleIcmpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions">CoreNetworkSecurityGroupSecurityRuleIcmpOptions</a>

icmp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#icmp_options CoreNetworkSecurityGroupSecurityRule#icmp_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#id CoreNetworkSecurityGroupSecurityRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#source CoreNetworkSecurityGroupSecurityRule#source}.

---

##### `sourceType`<sup>Optional</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#source_type CoreNetworkSecurityGroupSecurityRule#source_type}.

---

##### `stateless`<sup>Optional</sup> <a name="stateless" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.stateless"></a>

```typescript
public readonly stateless: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#stateless CoreNetworkSecurityGroupSecurityRule#stateless}.

---

##### `tcpOptions`<sup>Optional</sup> <a name="tcpOptions" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.tcpOptions"></a>

```typescript
public readonly tcpOptions: CoreNetworkSecurityGroupSecurityRuleTcpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions">CoreNetworkSecurityGroupSecurityRuleTcpOptions</a>

tcp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#tcp_options CoreNetworkSecurityGroupSecurityRule#tcp_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CoreNetworkSecurityGroupSecurityRuleTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts">CoreNetworkSecurityGroupSecurityRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#timeouts CoreNetworkSecurityGroupSecurityRule#timeouts}

---

##### `udpOptions`<sup>Optional</sup> <a name="udpOptions" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleConfig.property.udpOptions"></a>

```typescript
public readonly udpOptions: CoreNetworkSecurityGroupSecurityRuleUdpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions">CoreNetworkSecurityGroupSecurityRuleUdpOptions</a>

udp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#udp_options CoreNetworkSecurityGroupSecurityRule#udp_options}

---

### CoreNetworkSecurityGroupSecurityRuleIcmpOptions <a name="CoreNetworkSecurityGroupSecurityRuleIcmpOptions" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions.Initializer"></a>

```typescript
import { coreNetworkSecurityGroupSecurityRule } from 'rhizo-co-terraform-provider-oci'

const coreNetworkSecurityGroupSecurityRuleIcmpOptions: coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions.property.type">type</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#type CoreNetworkSecurityGroupSecurityRule#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions.property.code">code</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#code CoreNetworkSecurityGroupSecurityRule#code}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions.property.type"></a>

```typescript
public readonly type: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#type CoreNetworkSecurityGroupSecurityRule#type}.

---

##### `code`<sup>Optional</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#code CoreNetworkSecurityGroupSecurityRule#code}.

---

### CoreNetworkSecurityGroupSecurityRuleTcpOptions <a name="CoreNetworkSecurityGroupSecurityRuleTcpOptions" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions.Initializer"></a>

```typescript
import { coreNetworkSecurityGroupSecurityRule } from 'rhizo-co-terraform-provider-oci'

const coreNetworkSecurityGroupSecurityRuleTcpOptions: coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange</a></code> | destination_port_range block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `destinationPortRange`<sup>Optional</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#destination_port_range CoreNetworkSecurityGroupSecurityRule#destination_port_range}

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#source_port_range CoreNetworkSecurityGroupSecurityRule#source_port_range}

---

### CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange <a name="CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange.Initializer"></a>

```typescript
import { coreNetworkSecurityGroupSecurityRule } from 'rhizo-co-terraform-provider-oci'

const coreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange: coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#max CoreNetworkSecurityGroupSecurityRule#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#min CoreNetworkSecurityGroupSecurityRule#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#max CoreNetworkSecurityGroupSecurityRule#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#min CoreNetworkSecurityGroupSecurityRule#min}.

---

### CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange <a name="CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange.Initializer"></a>

```typescript
import { coreNetworkSecurityGroupSecurityRule } from 'rhizo-co-terraform-provider-oci'

const coreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange: coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#max CoreNetworkSecurityGroupSecurityRule#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#min CoreNetworkSecurityGroupSecurityRule#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#max CoreNetworkSecurityGroupSecurityRule#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#min CoreNetworkSecurityGroupSecurityRule#min}.

---

### CoreNetworkSecurityGroupSecurityRuleTimeouts <a name="CoreNetworkSecurityGroupSecurityRuleTimeouts" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts.Initializer"></a>

```typescript
import { coreNetworkSecurityGroupSecurityRule } from 'rhizo-co-terraform-provider-oci'

const coreNetworkSecurityGroupSecurityRuleTimeouts: coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#create CoreNetworkSecurityGroupSecurityRule#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#delete CoreNetworkSecurityGroupSecurityRule#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#update CoreNetworkSecurityGroupSecurityRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#create CoreNetworkSecurityGroupSecurityRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#delete CoreNetworkSecurityGroupSecurityRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#update CoreNetworkSecurityGroupSecurityRule#update}.

---

### CoreNetworkSecurityGroupSecurityRuleUdpOptions <a name="CoreNetworkSecurityGroupSecurityRuleUdpOptions" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions.Initializer"></a>

```typescript
import { coreNetworkSecurityGroupSecurityRule } from 'rhizo-co-terraform-provider-oci'

const coreNetworkSecurityGroupSecurityRuleUdpOptions: coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange</a></code> | destination_port_range block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `destinationPortRange`<sup>Optional</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange</a>

destination_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#destination_port_range CoreNetworkSecurityGroupSecurityRule#destination_port_range}

---

##### `sourcePortRange`<sup>Optional</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#source_port_range CoreNetworkSecurityGroupSecurityRule#source_port_range}

---

### CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange <a name="CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange.Initializer"></a>

```typescript
import { coreNetworkSecurityGroupSecurityRule } from 'rhizo-co-terraform-provider-oci'

const coreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange: coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#max CoreNetworkSecurityGroupSecurityRule#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#min CoreNetworkSecurityGroupSecurityRule#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#max CoreNetworkSecurityGroupSecurityRule#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#min CoreNetworkSecurityGroupSecurityRule#min}.

---

### CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange <a name="CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange.Initializer"></a>

```typescript
import { coreNetworkSecurityGroupSecurityRule } from 'rhizo-co-terraform-provider-oci'

const coreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange: coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange.property.max">max</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#max CoreNetworkSecurityGroupSecurityRule#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange.property.min">min</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#min CoreNetworkSecurityGroupSecurityRule#min}. |

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#max CoreNetworkSecurityGroupSecurityRule#max}.

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_network_security_group_security_rule#min CoreNetworkSecurityGroupSecurityRule#min}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference <a name="CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.Initializer"></a>

```typescript
import { coreNetworkSecurityGroupSecurityRule } from 'rhizo-co-terraform-provider-oci'

new coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.resetCode">resetCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCode` <a name="resetCode" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.resetCode"></a>

```typescript
public resetCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.codeInput">codeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.typeInput">typeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.type">type</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions">CoreNetworkSecurityGroupSecurityRuleIcmpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.codeInput"></a>

```typescript
public readonly codeInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: number;
```

- *Type:* number

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.type"></a>

```typescript
public readonly type: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreNetworkSecurityGroupSecurityRuleIcmpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleIcmpOptions">CoreNetworkSecurityGroupSecurityRuleIcmpOptions</a>

---


### CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference <a name="CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```typescript
import { coreNetworkSecurityGroupSecurityRule } from 'rhizo-co-terraform-provider-oci'

new coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange</a>

---


### CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference <a name="CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.Initializer"></a>

```typescript
import { coreNetworkSecurityGroupSecurityRule } from 'rhizo-co-terraform-provider-oci'

new coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.putDestinationPortRange">putDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.putSourcePortRange">putSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.resetDestinationPortRange">resetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationPortRange` <a name="putDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.putDestinationPortRange"></a>

```typescript
public putDestinationPortRange(value: CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.putDestinationPortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange</a>

---

##### `putSourcePortRange` <a name="putSourcePortRange" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.putSourcePortRange"></a>

```typescript
public putSourcePortRange(value: CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange</a>

---

##### `resetDestinationPortRange` <a name="resetDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.resetDestinationPortRange"></a>

```typescript
public resetDestinationPortRange(): void
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.resetSourcePortRange"></a>

```typescript
public resetSourcePortRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference">CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference">CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.destinationPortRangeInput">destinationPortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions">CoreNetworkSecurityGroupSecurityRuleTcpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference">CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRangeOutputReference</a>

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference">CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference</a>

---

##### `destinationPortRangeInput`<sup>Optional</sup> <a name="destinationPortRangeInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.destinationPortRangeInput"></a>

```typescript
public readonly destinationPortRangeInput: CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsDestinationPortRange</a>

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.sourcePortRangeInput"></a>

```typescript
public readonly sourcePortRangeInput: CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreNetworkSecurityGroupSecurityRuleTcpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptions">CoreNetworkSecurityGroupSecurityRuleTcpOptions</a>

---


### CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference <a name="CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```typescript
import { coreNetworkSecurityGroupSecurityRule } from 'rhizo-co-terraform-provider-oci'

new coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleTcpOptionsSourcePortRange</a>

---


### CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference <a name="CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { coreNetworkSecurityGroupSecurityRule } from 'rhizo-co-terraform-provider-oci'

new coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts">CoreNetworkSecurityGroupSecurityRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreNetworkSecurityGroupSecurityRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleTimeouts">CoreNetworkSecurityGroupSecurityRuleTimeouts</a>

---


### CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference <a name="CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.Initializer"></a>

```typescript
import { coreNetworkSecurityGroupSecurityRule } from 'rhizo-co-terraform-provider-oci'

new coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange</a>

---


### CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference <a name="CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.Initializer"></a>

```typescript
import { coreNetworkSecurityGroupSecurityRule } from 'rhizo-co-terraform-provider-oci'

new coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.putDestinationPortRange">putDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.putSourcePortRange">putSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.resetDestinationPortRange">resetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.resetSourcePortRange">resetSourcePortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinationPortRange` <a name="putDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.putDestinationPortRange"></a>

```typescript
public putDestinationPortRange(value: CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.putDestinationPortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange</a>

---

##### `putSourcePortRange` <a name="putSourcePortRange" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.putSourcePortRange"></a>

```typescript
public putSourcePortRange(value: CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange</a>

---

##### `resetDestinationPortRange` <a name="resetDestinationPortRange" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.resetDestinationPortRange"></a>

```typescript
public resetDestinationPortRange(): void
```

##### `resetSourcePortRange` <a name="resetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.resetSourcePortRange"></a>

```typescript
public resetSourcePortRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.destinationPortRange">destinationPortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference">CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.sourcePortRange">sourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference">CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.destinationPortRangeInput">destinationPortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.sourcePortRangeInput">sourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions">CoreNetworkSecurityGroupSecurityRuleUdpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationPortRange`<sup>Required</sup> <a name="destinationPortRange" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.destinationPortRange"></a>

```typescript
public readonly destinationPortRange: CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference">CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRangeOutputReference</a>

---

##### `sourcePortRange`<sup>Required</sup> <a name="sourcePortRange" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.sourcePortRange"></a>

```typescript
public readonly sourcePortRange: CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference">CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference</a>

---

##### `destinationPortRangeInput`<sup>Optional</sup> <a name="destinationPortRangeInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.destinationPortRangeInput"></a>

```typescript
public readonly destinationPortRangeInput: CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsDestinationPortRange</a>

---

##### `sourcePortRangeInput`<sup>Optional</sup> <a name="sourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.sourcePortRangeInput"></a>

```typescript
public readonly sourcePortRangeInput: CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreNetworkSecurityGroupSecurityRuleUdpOptions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptions">CoreNetworkSecurityGroupSecurityRuleUdpOptions</a>

---


### CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference <a name="CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```typescript
import { coreNetworkSecurityGroupSecurityRule } from 'rhizo-co-terraform-provider-oci'

new coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.maxInput">maxInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.minInput">minInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxInput`<sup>Optional</sup> <a name="maxInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```typescript
public readonly maxInput: number;
```

- *Type:* number

---

##### `minInput`<sup>Optional</sup> <a name="minInput" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```typescript
public readonly minInput: number;
```

- *Type:* number

---

##### `max`<sup>Required</sup> <a name="max" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreNetworkSecurityGroupSecurityRule.CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange">CoreNetworkSecurityGroupSecurityRuleUdpOptionsSourcePortRange</a>

---



