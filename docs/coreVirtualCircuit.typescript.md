# `coreVirtualCircuit` Submodule <a name="`coreVirtualCircuit` Submodule" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreVirtualCircuit <a name="CoreVirtualCircuit" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit oci_core_virtual_circuit}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer"></a>

```typescript
import { coreVirtualCircuit } from 'rhizo-co-terraform-provider-oci'

new coreVirtualCircuit.CoreVirtualCircuit(scope: Construct, id: string, config: CoreVirtualCircuitConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig">CoreVirtualCircuitConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig">CoreVirtualCircuitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putCrossConnectMappings">putCrossConnectMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putPublicPrefixes">putPublicPrefixes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetBandwidthShapeName">resetBandwidthShapeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetBgpAdminState">resetBgpAdminState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetCrossConnectMappings">resetCrossConnectMappings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetCustomerAsn">resetCustomerAsn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetCustomerBgpAsn">resetCustomerBgpAsn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetGatewayId">resetGatewayId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetIpMtu">resetIpMtu</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetIsBfdEnabled">resetIsBfdEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetIsTransportMode">resetIsTransportMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetProviderServiceId">resetProviderServiceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetProviderServiceKeyName">resetProviderServiceKeyName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetPublicPrefixes">resetPublicPrefixes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetRoutingPolicy">resetRoutingPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCrossConnectMappings` <a name="putCrossConnectMappings" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putCrossConnectMappings"></a>

```typescript
public putCrossConnectMappings(value: IResolvable | CoreVirtualCircuitCrossConnectMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putCrossConnectMappings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>[]

---

##### `putPublicPrefixes` <a name="putPublicPrefixes" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putPublicPrefixes"></a>

```typescript
public putPublicPrefixes(value: IResolvable | CoreVirtualCircuitPublicPrefixes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putPublicPrefixes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putTimeouts"></a>

```typescript
public putTimeouts(value: CoreVirtualCircuitTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts">CoreVirtualCircuitTimeouts</a>

---

##### `resetBandwidthShapeName` <a name="resetBandwidthShapeName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetBandwidthShapeName"></a>

```typescript
public resetBandwidthShapeName(): void
```

##### `resetBgpAdminState` <a name="resetBgpAdminState" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetBgpAdminState"></a>

```typescript
public resetBgpAdminState(): void
```

##### `resetCrossConnectMappings` <a name="resetCrossConnectMappings" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetCrossConnectMappings"></a>

```typescript
public resetCrossConnectMappings(): void
```

##### `resetCustomerAsn` <a name="resetCustomerAsn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetCustomerAsn"></a>

```typescript
public resetCustomerAsn(): void
```

##### `resetCustomerBgpAsn` <a name="resetCustomerBgpAsn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetCustomerBgpAsn"></a>

```typescript
public resetCustomerBgpAsn(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetGatewayId` <a name="resetGatewayId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetGatewayId"></a>

```typescript
public resetGatewayId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpMtu` <a name="resetIpMtu" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetIpMtu"></a>

```typescript
public resetIpMtu(): void
```

##### `resetIsBfdEnabled` <a name="resetIsBfdEnabled" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetIsBfdEnabled"></a>

```typescript
public resetIsBfdEnabled(): void
```

##### `resetIsTransportMode` <a name="resetIsTransportMode" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetIsTransportMode"></a>

```typescript
public resetIsTransportMode(): void
```

##### `resetProviderServiceId` <a name="resetProviderServiceId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetProviderServiceId"></a>

```typescript
public resetProviderServiceId(): void
```

##### `resetProviderServiceKeyName` <a name="resetProviderServiceKeyName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetProviderServiceKeyName"></a>

```typescript
public resetProviderServiceKeyName(): void
```

##### `resetPublicPrefixes` <a name="resetPublicPrefixes" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetPublicPrefixes"></a>

```typescript
public resetPublicPrefixes(): void
```

##### `resetRegion` <a name="resetRegion" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRoutingPolicy` <a name="resetRoutingPolicy" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetRoutingPolicy"></a>

```typescript
public resetRoutingPolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreVirtualCircuit resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isConstruct"></a>

```typescript
import { coreVirtualCircuit } from 'rhizo-co-terraform-provider-oci'

coreVirtualCircuit.CoreVirtualCircuit.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isTerraformElement"></a>

```typescript
import { coreVirtualCircuit } from 'rhizo-co-terraform-provider-oci'

coreVirtualCircuit.CoreVirtualCircuit.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isTerraformResource"></a>

```typescript
import { coreVirtualCircuit } from 'rhizo-co-terraform-provider-oci'

coreVirtualCircuit.CoreVirtualCircuit.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.generateConfigForImport"></a>

```typescript
import { coreVirtualCircuit } from 'rhizo-co-terraform-provider-oci'

coreVirtualCircuit.CoreVirtualCircuit.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CoreVirtualCircuit resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CoreVirtualCircuit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CoreVirtualCircuit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreVirtualCircuit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpIpv6SessionState">bgpIpv6SessionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpManagement">bgpManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpSessionState">bgpSessionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.crossConnectMappings">crossConnectMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList">CoreVirtualCircuitCrossConnectMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.oracleBgpAsn">oracleBgpAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerState">providerState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.publicPrefixes">publicPrefixes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList">CoreVirtualCircuitPublicPrefixesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.referenceComment">referenceComment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.serviceType">serviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference">CoreVirtualCircuitTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.virtualCircuitRedundancyMetadata">virtualCircuitRedundancyMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList">CoreVirtualCircuitVirtualCircuitRedundancyMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bandwidthShapeNameInput">bandwidthShapeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpAdminStateInput">bgpAdminStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.crossConnectMappingsInput">crossConnectMappingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerAsnInput">customerAsnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerBgpAsnInput">customerBgpAsnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.gatewayIdInput">gatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.ipMtuInput">ipMtuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isBfdEnabledInput">isBfdEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isTransportModeInput">isTransportModeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceIdInput">providerServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceKeyNameInput">providerServiceKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.publicPrefixesInput">publicPrefixesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.routingPolicyInput">routingPolicyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts">CoreVirtualCircuitTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bandwidthShapeName">bandwidthShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpAdminState">bgpAdminState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerAsn">customerAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerBgpAsn">customerBgpAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.ipMtu">ipMtu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isBfdEnabled">isBfdEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isTransportMode">isTransportMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceId">providerServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceKeyName">providerServiceKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.routingPolicy">routingPolicy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bgpIpv6SessionState`<sup>Required</sup> <a name="bgpIpv6SessionState" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpIpv6SessionState"></a>

```typescript
public readonly bgpIpv6SessionState: string;
```

- *Type:* string

---

##### `bgpManagement`<sup>Required</sup> <a name="bgpManagement" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpManagement"></a>

```typescript
public readonly bgpManagement: string;
```

- *Type:* string

---

##### `bgpSessionState`<sup>Required</sup> <a name="bgpSessionState" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpSessionState"></a>

```typescript
public readonly bgpSessionState: string;
```

- *Type:* string

---

##### `crossConnectMappings`<sup>Required</sup> <a name="crossConnectMappings" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.crossConnectMappings"></a>

```typescript
public readonly crossConnectMappings: CoreVirtualCircuitCrossConnectMappingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList">CoreVirtualCircuitCrossConnectMappingsList</a>

---

##### `oracleBgpAsn`<sup>Required</sup> <a name="oracleBgpAsn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.oracleBgpAsn"></a>

```typescript
public readonly oracleBgpAsn: number;
```

- *Type:* number

---

##### `providerState`<sup>Required</sup> <a name="providerState" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerState"></a>

```typescript
public readonly providerState: string;
```

- *Type:* string

---

##### `publicPrefixes`<sup>Required</sup> <a name="publicPrefixes" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.publicPrefixes"></a>

```typescript
public readonly publicPrefixes: CoreVirtualCircuitPublicPrefixesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList">CoreVirtualCircuitPublicPrefixesList</a>

---

##### `referenceComment`<sup>Required</sup> <a name="referenceComment" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.referenceComment"></a>

```typescript
public readonly referenceComment: string;
```

- *Type:* string

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.timeouts"></a>

```typescript
public readonly timeouts: CoreVirtualCircuitTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference">CoreVirtualCircuitTimeoutsOutputReference</a>

---

##### `virtualCircuitRedundancyMetadata`<sup>Required</sup> <a name="virtualCircuitRedundancyMetadata" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.virtualCircuitRedundancyMetadata"></a>

```typescript
public readonly virtualCircuitRedundancyMetadata: CoreVirtualCircuitVirtualCircuitRedundancyMetadataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList">CoreVirtualCircuitVirtualCircuitRedundancyMetadataList</a>

---

##### `bandwidthShapeNameInput`<sup>Optional</sup> <a name="bandwidthShapeNameInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bandwidthShapeNameInput"></a>

```typescript
public readonly bandwidthShapeNameInput: string;
```

- *Type:* string

---

##### `bgpAdminStateInput`<sup>Optional</sup> <a name="bgpAdminStateInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpAdminStateInput"></a>

```typescript
public readonly bgpAdminStateInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `crossConnectMappingsInput`<sup>Optional</sup> <a name="crossConnectMappingsInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.crossConnectMappingsInput"></a>

```typescript
public readonly crossConnectMappingsInput: IResolvable | CoreVirtualCircuitCrossConnectMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>[]

---

##### `customerAsnInput`<sup>Optional</sup> <a name="customerAsnInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerAsnInput"></a>

```typescript
public readonly customerAsnInput: string;
```

- *Type:* string

---

##### `customerBgpAsnInput`<sup>Optional</sup> <a name="customerBgpAsnInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerBgpAsnInput"></a>

```typescript
public readonly customerBgpAsnInput: number;
```

- *Type:* number

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.gatewayIdInput"></a>

```typescript
public readonly gatewayIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipMtuInput`<sup>Optional</sup> <a name="ipMtuInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.ipMtuInput"></a>

```typescript
public readonly ipMtuInput: string;
```

- *Type:* string

---

##### `isBfdEnabledInput`<sup>Optional</sup> <a name="isBfdEnabledInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isBfdEnabledInput"></a>

```typescript
public readonly isBfdEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isTransportModeInput`<sup>Optional</sup> <a name="isTransportModeInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isTransportModeInput"></a>

```typescript
public readonly isTransportModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `providerServiceIdInput`<sup>Optional</sup> <a name="providerServiceIdInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceIdInput"></a>

```typescript
public readonly providerServiceIdInput: string;
```

- *Type:* string

---

##### `providerServiceKeyNameInput`<sup>Optional</sup> <a name="providerServiceKeyNameInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceKeyNameInput"></a>

```typescript
public readonly providerServiceKeyNameInput: string;
```

- *Type:* string

---

##### `publicPrefixesInput`<sup>Optional</sup> <a name="publicPrefixesInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.publicPrefixesInput"></a>

```typescript
public readonly publicPrefixesInput: IResolvable | CoreVirtualCircuitPublicPrefixes[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `routingPolicyInput`<sup>Optional</sup> <a name="routingPolicyInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.routingPolicyInput"></a>

```typescript
public readonly routingPolicyInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CoreVirtualCircuitTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts">CoreVirtualCircuitTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `bandwidthShapeName`<sup>Required</sup> <a name="bandwidthShapeName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bandwidthShapeName"></a>

```typescript
public readonly bandwidthShapeName: string;
```

- *Type:* string

---

##### `bgpAdminState`<sup>Required</sup> <a name="bgpAdminState" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.bgpAdminState"></a>

```typescript
public readonly bgpAdminState: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `customerAsn`<sup>Required</sup> <a name="customerAsn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerAsn"></a>

```typescript
public readonly customerAsn: string;
```

- *Type:* string

---

##### `customerBgpAsn`<sup>Required</sup> <a name="customerBgpAsn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.customerBgpAsn"></a>

```typescript
public readonly customerBgpAsn: number;
```

- *Type:* number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipMtu`<sup>Required</sup> <a name="ipMtu" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.ipMtu"></a>

```typescript
public readonly ipMtu: string;
```

- *Type:* string

---

##### `isBfdEnabled`<sup>Required</sup> <a name="isBfdEnabled" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isBfdEnabled"></a>

```typescript
public readonly isBfdEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isTransportMode`<sup>Required</sup> <a name="isTransportMode" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.isTransportMode"></a>

```typescript
public readonly isTransportMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `providerServiceId`<sup>Required</sup> <a name="providerServiceId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceId"></a>

```typescript
public readonly providerServiceId: string;
```

- *Type:* string

---

##### `providerServiceKeyName`<sup>Required</sup> <a name="providerServiceKeyName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.providerServiceKeyName"></a>

```typescript
public readonly providerServiceKeyName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `routingPolicy`<sup>Required</sup> <a name="routingPolicy" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.routingPolicy"></a>

```typescript
public readonly routingPolicy: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuit.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreVirtualCircuitConfig <a name="CoreVirtualCircuitConfig" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.Initializer"></a>

```typescript
import { coreVirtualCircuit } from 'rhizo-co-terraform-provider-oci'

const coreVirtualCircuitConfig: coreVirtualCircuit.CoreVirtualCircuitConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#compartment_id CoreVirtualCircuit#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#type CoreVirtualCircuit#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.bandwidthShapeName">bandwidthShapeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bandwidth_shape_name CoreVirtualCircuit#bandwidth_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.bgpAdminState">bgpAdminState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bgp_admin_state CoreVirtualCircuit#bgp_admin_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.crossConnectMappings">crossConnectMappings</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>[]</code> | cross_connect_mappings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.customerAsn">customerAsn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_asn CoreVirtualCircuit#customer_asn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.customerBgpAsn">customerBgpAsn</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_asn CoreVirtualCircuit#customer_bgp_asn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#defined_tags CoreVirtualCircuit#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#display_name CoreVirtualCircuit#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#freeform_tags CoreVirtualCircuit#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.gatewayId">gatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#gateway_id CoreVirtualCircuit#gateway_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#id CoreVirtualCircuit#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.ipMtu">ipMtu</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#ip_mtu CoreVirtualCircuit#ip_mtu}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.isBfdEnabled">isBfdEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#is_bfd_enabled CoreVirtualCircuit#is_bfd_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.isTransportMode">isTransportMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#is_transport_mode CoreVirtualCircuit#is_transport_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.providerServiceId">providerServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#provider_service_id CoreVirtualCircuit#provider_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.providerServiceKeyName">providerServiceKeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#provider_service_key_name CoreVirtualCircuit#provider_service_key_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.publicPrefixes">publicPrefixes</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>[]</code> | public_prefixes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#region CoreVirtualCircuit#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.routingPolicy">routingPolicy</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#routing_policy CoreVirtualCircuit#routing_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts">CoreVirtualCircuitTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#compartment_id CoreVirtualCircuit#compartment_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#type CoreVirtualCircuit#type}.

---

##### `bandwidthShapeName`<sup>Optional</sup> <a name="bandwidthShapeName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.bandwidthShapeName"></a>

```typescript
public readonly bandwidthShapeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bandwidth_shape_name CoreVirtualCircuit#bandwidth_shape_name}.

---

##### `bgpAdminState`<sup>Optional</sup> <a name="bgpAdminState" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.bgpAdminState"></a>

```typescript
public readonly bgpAdminState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bgp_admin_state CoreVirtualCircuit#bgp_admin_state}.

---

##### `crossConnectMappings`<sup>Optional</sup> <a name="crossConnectMappings" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.crossConnectMappings"></a>

```typescript
public readonly crossConnectMappings: IResolvable | CoreVirtualCircuitCrossConnectMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>[]

cross_connect_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#cross_connect_mappings CoreVirtualCircuit#cross_connect_mappings}

---

##### `customerAsn`<sup>Optional</sup> <a name="customerAsn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.customerAsn"></a>

```typescript
public readonly customerAsn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_asn CoreVirtualCircuit#customer_asn}.

---

##### `customerBgpAsn`<sup>Optional</sup> <a name="customerBgpAsn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.customerBgpAsn"></a>

```typescript
public readonly customerBgpAsn: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_asn CoreVirtualCircuit#customer_bgp_asn}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#defined_tags CoreVirtualCircuit#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#display_name CoreVirtualCircuit#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#freeform_tags CoreVirtualCircuit#freeform_tags}.

---

##### `gatewayId`<sup>Optional</sup> <a name="gatewayId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#gateway_id CoreVirtualCircuit#gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#id CoreVirtualCircuit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipMtu`<sup>Optional</sup> <a name="ipMtu" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.ipMtu"></a>

```typescript
public readonly ipMtu: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#ip_mtu CoreVirtualCircuit#ip_mtu}.

---

##### `isBfdEnabled`<sup>Optional</sup> <a name="isBfdEnabled" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.isBfdEnabled"></a>

```typescript
public readonly isBfdEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#is_bfd_enabled CoreVirtualCircuit#is_bfd_enabled}.

---

##### `isTransportMode`<sup>Optional</sup> <a name="isTransportMode" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.isTransportMode"></a>

```typescript
public readonly isTransportMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#is_transport_mode CoreVirtualCircuit#is_transport_mode}.

---

##### `providerServiceId`<sup>Optional</sup> <a name="providerServiceId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.providerServiceId"></a>

```typescript
public readonly providerServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#provider_service_id CoreVirtualCircuit#provider_service_id}.

---

##### `providerServiceKeyName`<sup>Optional</sup> <a name="providerServiceKeyName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.providerServiceKeyName"></a>

```typescript
public readonly providerServiceKeyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#provider_service_key_name CoreVirtualCircuit#provider_service_key_name}.

---

##### `publicPrefixes`<sup>Optional</sup> <a name="publicPrefixes" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.publicPrefixes"></a>

```typescript
public readonly publicPrefixes: IResolvable | CoreVirtualCircuitPublicPrefixes[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>[]

public_prefixes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#public_prefixes CoreVirtualCircuit#public_prefixes}

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#region CoreVirtualCircuit#region}.

---

##### `routingPolicy`<sup>Optional</sup> <a name="routingPolicy" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.routingPolicy"></a>

```typescript
public readonly routingPolicy: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#routing_policy CoreVirtualCircuit#routing_policy}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CoreVirtualCircuitTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts">CoreVirtualCircuitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#timeouts CoreVirtualCircuit#timeouts}

---

### CoreVirtualCircuitCrossConnectMappings <a name="CoreVirtualCircuitCrossConnectMappings" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.Initializer"></a>

```typescript
import { coreVirtualCircuit } from 'rhizo-co-terraform-provider-oci'

const coreVirtualCircuitCrossConnectMappings: coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.bgpMd5AuthKey">bgpMd5AuthKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bgp_md5auth_key CoreVirtualCircuit#bgp_md5auth_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.crossConnectOrCrossConnectGroupId">crossConnectOrCrossConnectGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#cross_connect_or_cross_connect_group_id CoreVirtualCircuit#cross_connect_or_cross_connect_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.customerBgpPeeringIp">customerBgpPeeringIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_peering_ip CoreVirtualCircuit#customer_bgp_peering_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.customerBgpPeeringIpv6">customerBgpPeeringIpv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_peering_ipv6 CoreVirtualCircuit#customer_bgp_peering_ipv6}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.oracleBgpPeeringIp">oracleBgpPeeringIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#oracle_bgp_peering_ip CoreVirtualCircuit#oracle_bgp_peering_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.oracleBgpPeeringIpv6">oracleBgpPeeringIpv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#oracle_bgp_peering_ipv6 CoreVirtualCircuit#oracle_bgp_peering_ipv6}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.vlan">vlan</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#vlan CoreVirtualCircuit#vlan}. |

---

##### `bgpMd5AuthKey`<sup>Optional</sup> <a name="bgpMd5AuthKey" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.bgpMd5AuthKey"></a>

```typescript
public readonly bgpMd5AuthKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#bgp_md5auth_key CoreVirtualCircuit#bgp_md5auth_key}.

---

##### `crossConnectOrCrossConnectGroupId`<sup>Optional</sup> <a name="crossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.crossConnectOrCrossConnectGroupId"></a>

```typescript
public readonly crossConnectOrCrossConnectGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#cross_connect_or_cross_connect_group_id CoreVirtualCircuit#cross_connect_or_cross_connect_group_id}.

---

##### `customerBgpPeeringIp`<sup>Optional</sup> <a name="customerBgpPeeringIp" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.customerBgpPeeringIp"></a>

```typescript
public readonly customerBgpPeeringIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_peering_ip CoreVirtualCircuit#customer_bgp_peering_ip}.

---

##### `customerBgpPeeringIpv6`<sup>Optional</sup> <a name="customerBgpPeeringIpv6" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.customerBgpPeeringIpv6"></a>

```typescript
public readonly customerBgpPeeringIpv6: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#customer_bgp_peering_ipv6 CoreVirtualCircuit#customer_bgp_peering_ipv6}.

---

##### `oracleBgpPeeringIp`<sup>Optional</sup> <a name="oracleBgpPeeringIp" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.oracleBgpPeeringIp"></a>

```typescript
public readonly oracleBgpPeeringIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#oracle_bgp_peering_ip CoreVirtualCircuit#oracle_bgp_peering_ip}.

---

##### `oracleBgpPeeringIpv6`<sup>Optional</sup> <a name="oracleBgpPeeringIpv6" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.oracleBgpPeeringIpv6"></a>

```typescript
public readonly oracleBgpPeeringIpv6: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#oracle_bgp_peering_ipv6 CoreVirtualCircuit#oracle_bgp_peering_ipv6}.

---

##### `vlan`<sup>Optional</sup> <a name="vlan" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#vlan CoreVirtualCircuit#vlan}.

---

### CoreVirtualCircuitPublicPrefixes <a name="CoreVirtualCircuitPublicPrefixes" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes.Initializer"></a>

```typescript
import { coreVirtualCircuit } from 'rhizo-co-terraform-provider-oci'

const coreVirtualCircuitPublicPrefixes: coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#cidr_block CoreVirtualCircuit#cidr_block}. |

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#cidr_block CoreVirtualCircuit#cidr_block}.

---

### CoreVirtualCircuitTimeouts <a name="CoreVirtualCircuitTimeouts" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.Initializer"></a>

```typescript
import { coreVirtualCircuit } from 'rhizo-co-terraform-provider-oci'

const coreVirtualCircuitTimeouts: coreVirtualCircuit.CoreVirtualCircuitTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#create CoreVirtualCircuit#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#delete CoreVirtualCircuit#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#update CoreVirtualCircuit#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#create CoreVirtualCircuit#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#delete CoreVirtualCircuit#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_virtual_circuit#update CoreVirtualCircuit#update}.

---

### CoreVirtualCircuitVirtualCircuitRedundancyMetadata <a name="CoreVirtualCircuitVirtualCircuitRedundancyMetadata" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadata.Initializer"></a>

```typescript
import { coreVirtualCircuit } from 'rhizo-co-terraform-provider-oci'

const coreVirtualCircuitVirtualCircuitRedundancyMetadata: coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadata = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### CoreVirtualCircuitCrossConnectMappingsList <a name="CoreVirtualCircuitCrossConnectMappingsList" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer"></a>

```typescript
import { coreVirtualCircuit } from 'rhizo-co-terraform-provider-oci'

new coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.get"></a>

```typescript
public get(index: number): CoreVirtualCircuitCrossConnectMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreVirtualCircuitCrossConnectMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>[]

---


### CoreVirtualCircuitCrossConnectMappingsOutputReference <a name="CoreVirtualCircuitCrossConnectMappingsOutputReference" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer"></a>

```typescript
import { coreVirtualCircuit } from 'rhizo-co-terraform-provider-oci'

new coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetBgpMd5AuthKey">resetBgpMd5AuthKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetCrossConnectOrCrossConnectGroupId">resetCrossConnectOrCrossConnectGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetCustomerBgpPeeringIp">resetCustomerBgpPeeringIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetCustomerBgpPeeringIpv6">resetCustomerBgpPeeringIpv6</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetOracleBgpPeeringIp">resetOracleBgpPeeringIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetOracleBgpPeeringIpv6">resetOracleBgpPeeringIpv6</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetVlan">resetVlan</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBgpMd5AuthKey` <a name="resetBgpMd5AuthKey" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetBgpMd5AuthKey"></a>

```typescript
public resetBgpMd5AuthKey(): void
```

##### `resetCrossConnectOrCrossConnectGroupId` <a name="resetCrossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetCrossConnectOrCrossConnectGroupId"></a>

```typescript
public resetCrossConnectOrCrossConnectGroupId(): void
```

##### `resetCustomerBgpPeeringIp` <a name="resetCustomerBgpPeeringIp" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetCustomerBgpPeeringIp"></a>

```typescript
public resetCustomerBgpPeeringIp(): void
```

##### `resetCustomerBgpPeeringIpv6` <a name="resetCustomerBgpPeeringIpv6" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetCustomerBgpPeeringIpv6"></a>

```typescript
public resetCustomerBgpPeeringIpv6(): void
```

##### `resetOracleBgpPeeringIp` <a name="resetOracleBgpPeeringIp" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetOracleBgpPeeringIp"></a>

```typescript
public resetOracleBgpPeeringIp(): void
```

##### `resetOracleBgpPeeringIpv6` <a name="resetOracleBgpPeeringIpv6" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetOracleBgpPeeringIpv6"></a>

```typescript
public resetOracleBgpPeeringIpv6(): void
```

##### `resetVlan` <a name="resetVlan" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.resetVlan"></a>

```typescript
public resetVlan(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.bgpMd5AuthKeyInput">bgpMd5AuthKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.crossConnectOrCrossConnectGroupIdInput">crossConnectOrCrossConnectGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpInput">customerBgpPeeringIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpv6Input">customerBgpPeeringIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpInput">oracleBgpPeeringIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpv6Input">oracleBgpPeeringIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.vlanInput">vlanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.bgpMd5AuthKey">bgpMd5AuthKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.crossConnectOrCrossConnectGroupId">crossConnectOrCrossConnectGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIp">customerBgpPeeringIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpv6">customerBgpPeeringIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIp">oracleBgpPeeringIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpv6">oracleBgpPeeringIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.vlan">vlan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bgpMd5AuthKeyInput`<sup>Optional</sup> <a name="bgpMd5AuthKeyInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.bgpMd5AuthKeyInput"></a>

```typescript
public readonly bgpMd5AuthKeyInput: string;
```

- *Type:* string

---

##### `crossConnectOrCrossConnectGroupIdInput`<sup>Optional</sup> <a name="crossConnectOrCrossConnectGroupIdInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.crossConnectOrCrossConnectGroupIdInput"></a>

```typescript
public readonly crossConnectOrCrossConnectGroupIdInput: string;
```

- *Type:* string

---

##### `customerBgpPeeringIpInput`<sup>Optional</sup> <a name="customerBgpPeeringIpInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpInput"></a>

```typescript
public readonly customerBgpPeeringIpInput: string;
```

- *Type:* string

---

##### `customerBgpPeeringIpv6Input`<sup>Optional</sup> <a name="customerBgpPeeringIpv6Input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpv6Input"></a>

```typescript
public readonly customerBgpPeeringIpv6Input: string;
```

- *Type:* string

---

##### `oracleBgpPeeringIpInput`<sup>Optional</sup> <a name="oracleBgpPeeringIpInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpInput"></a>

```typescript
public readonly oracleBgpPeeringIpInput: string;
```

- *Type:* string

---

##### `oracleBgpPeeringIpv6Input`<sup>Optional</sup> <a name="oracleBgpPeeringIpv6Input" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpv6Input"></a>

```typescript
public readonly oracleBgpPeeringIpv6Input: string;
```

- *Type:* string

---

##### `vlanInput`<sup>Optional</sup> <a name="vlanInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.vlanInput"></a>

```typescript
public readonly vlanInput: number;
```

- *Type:* number

---

##### `bgpMd5AuthKey`<sup>Required</sup> <a name="bgpMd5AuthKey" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.bgpMd5AuthKey"></a>

```typescript
public readonly bgpMd5AuthKey: string;
```

- *Type:* string

---

##### `crossConnectOrCrossConnectGroupId`<sup>Required</sup> <a name="crossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.crossConnectOrCrossConnectGroupId"></a>

```typescript
public readonly crossConnectOrCrossConnectGroupId: string;
```

- *Type:* string

---

##### `customerBgpPeeringIp`<sup>Required</sup> <a name="customerBgpPeeringIp" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIp"></a>

```typescript
public readonly customerBgpPeeringIp: string;
```

- *Type:* string

---

##### `customerBgpPeeringIpv6`<sup>Required</sup> <a name="customerBgpPeeringIpv6" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.customerBgpPeeringIpv6"></a>

```typescript
public readonly customerBgpPeeringIpv6: string;
```

- *Type:* string

---

##### `oracleBgpPeeringIp`<sup>Required</sup> <a name="oracleBgpPeeringIp" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIp"></a>

```typescript
public readonly oracleBgpPeeringIp: string;
```

- *Type:* string

---

##### `oracleBgpPeeringIpv6`<sup>Required</sup> <a name="oracleBgpPeeringIpv6" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.oracleBgpPeeringIpv6"></a>

```typescript
public readonly oracleBgpPeeringIpv6: string;
```

- *Type:* string

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreVirtualCircuitCrossConnectMappings;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitCrossConnectMappings">CoreVirtualCircuitCrossConnectMappings</a>

---


### CoreVirtualCircuitPublicPrefixesList <a name="CoreVirtualCircuitPublicPrefixesList" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer"></a>

```typescript
import { coreVirtualCircuit } from 'rhizo-co-terraform-provider-oci'

new coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.get"></a>

```typescript
public get(index: number): CoreVirtualCircuitPublicPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreVirtualCircuitPublicPrefixes[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>[]

---


### CoreVirtualCircuitPublicPrefixesOutputReference <a name="CoreVirtualCircuitPublicPrefixesOutputReference" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer"></a>

```typescript
import { coreVirtualCircuit } from 'rhizo-co-terraform-provider-oci'

new coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.cidrBlockInput">cidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.cidrBlockInput"></a>

```typescript
public readonly cidrBlockInput: string;
```

- *Type:* string

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreVirtualCircuitPublicPrefixes;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitPublicPrefixes">CoreVirtualCircuitPublicPrefixes</a>

---


### CoreVirtualCircuitTimeoutsOutputReference <a name="CoreVirtualCircuitTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.Initializer"></a>

```typescript
import { coreVirtualCircuit } from 'rhizo-co-terraform-provider-oci'

new coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts">CoreVirtualCircuitTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CoreVirtualCircuitTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitTimeouts">CoreVirtualCircuitTimeouts</a>

---


### CoreVirtualCircuitVirtualCircuitRedundancyMetadataList <a name="CoreVirtualCircuitVirtualCircuitRedundancyMetadataList" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer"></a>

```typescript
import { coreVirtualCircuit } from 'rhizo-co-terraform-provider-oci'

new coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.get"></a>

```typescript
public get(index: number): CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference <a name="CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer"></a>

```typescript
import { coreVirtualCircuit } from 'rhizo-co-terraform-provider-oci'

new coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.configuredRedundancyLevel">configuredRedundancyLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.ipv4BgpSessionRedundancyStatus">ipv4BgpSessionRedundancyStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.ipv6BgpSessionRedundancyStatus">ipv6BgpSessionRedundancyStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadata">CoreVirtualCircuitVirtualCircuitRedundancyMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configuredRedundancyLevel`<sup>Required</sup> <a name="configuredRedundancyLevel" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.configuredRedundancyLevel"></a>

```typescript
public readonly configuredRedundancyLevel: string;
```

- *Type:* string

---

##### `ipv4BgpSessionRedundancyStatus`<sup>Required</sup> <a name="ipv4BgpSessionRedundancyStatus" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.ipv4BgpSessionRedundancyStatus"></a>

```typescript
public readonly ipv4BgpSessionRedundancyStatus: string;
```

- *Type:* string

---

##### `ipv6BgpSessionRedundancyStatus`<sup>Required</sup> <a name="ipv6BgpSessionRedundancyStatus" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.ipv6BgpSessionRedundancyStatus"></a>

```typescript
public readonly ipv6BgpSessionRedundancyStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CoreVirtualCircuitVirtualCircuitRedundancyMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVirtualCircuit.CoreVirtualCircuitVirtualCircuitRedundancyMetadata">CoreVirtualCircuitVirtualCircuitRedundancyMetadata</a>

---



