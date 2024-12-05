# `ospGatewayAddressActionVerification` Submodule <a name="`ospGatewayAddressActionVerification` Submodule" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OspGatewayAddressActionVerification <a name="OspGatewayAddressActionVerification" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification oci_osp_gateway_address_action_verification}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer"></a>

```typescript
import { ospGatewayAddressActionVerification } from 'rhizo-co-terraform-provider-oci'

new ospGatewayAddressActionVerification.OspGatewayAddressActionVerification(scope: Construct, id: string, config: OspGatewayAddressActionVerificationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig">OspGatewayAddressActionVerificationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig">OspGatewayAddressActionVerificationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetAddressKey">resetAddressKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCity">resetCity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCompanyName">resetCompanyName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetContributorClass">resetContributorClass</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCounty">resetCounty</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetDepartmentName">resetDepartmentName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetEmailAddress">resetEmailAddress</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetInternalNumber">resetInternalNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetJobTitle">resetJobTitle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLastName">resetLastName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine1">resetLine1</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine2">resetLine2</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine3">resetLine3</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine4">resetLine4</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetMiddleName">resetMiddleName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetMunicipalInscription">resetMunicipalInscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPhoneCountryCode">resetPhoneCountryCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetProvince">resetProvince</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStateInscription">resetStateInscription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStreetName">resetStreetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStreetNumber">resetStreetNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.putTimeouts"></a>

```typescript
public putTimeouts(value: OspGatewayAddressActionVerificationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a>

---

##### `resetAddressKey` <a name="resetAddressKey" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetAddressKey"></a>

```typescript
public resetAddressKey(): void
```

##### `resetCity` <a name="resetCity" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCity"></a>

```typescript
public resetCity(): void
```

##### `resetCompanyName` <a name="resetCompanyName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCompanyName"></a>

```typescript
public resetCompanyName(): void
```

##### `resetContributorClass` <a name="resetContributorClass" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetContributorClass"></a>

```typescript
public resetContributorClass(): void
```

##### `resetCountry` <a name="resetCountry" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCountry"></a>

```typescript
public resetCountry(): void
```

##### `resetCounty` <a name="resetCounty" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetCounty"></a>

```typescript
public resetCounty(): void
```

##### `resetDepartmentName` <a name="resetDepartmentName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetDepartmentName"></a>

```typescript
public resetDepartmentName(): void
```

##### `resetEmailAddress` <a name="resetEmailAddress" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetEmailAddress"></a>

```typescript
public resetEmailAddress(): void
```

##### `resetFirstName` <a name="resetFirstName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetFirstName"></a>

```typescript
public resetFirstName(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInternalNumber` <a name="resetInternalNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetInternalNumber"></a>

```typescript
public resetInternalNumber(): void
```

##### `resetJobTitle` <a name="resetJobTitle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetJobTitle"></a>

```typescript
public resetJobTitle(): void
```

##### `resetLastName` <a name="resetLastName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLastName"></a>

```typescript
public resetLastName(): void
```

##### `resetLine1` <a name="resetLine1" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine1"></a>

```typescript
public resetLine1(): void
```

##### `resetLine2` <a name="resetLine2" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine2"></a>

```typescript
public resetLine2(): void
```

##### `resetLine3` <a name="resetLine3" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine3"></a>

```typescript
public resetLine3(): void
```

##### `resetLine4` <a name="resetLine4" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetLine4"></a>

```typescript
public resetLine4(): void
```

##### `resetMiddleName` <a name="resetMiddleName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetMiddleName"></a>

```typescript
public resetMiddleName(): void
```

##### `resetMunicipalInscription` <a name="resetMunicipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetMunicipalInscription"></a>

```typescript
public resetMunicipalInscription(): void
```

##### `resetPhoneCountryCode` <a name="resetPhoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPhoneCountryCode"></a>

```typescript
public resetPhoneCountryCode(): void
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPhoneNumber"></a>

```typescript
public resetPhoneNumber(): void
```

##### `resetPostalCode` <a name="resetPostalCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetPostalCode"></a>

```typescript
public resetPostalCode(): void
```

##### `resetProvince` <a name="resetProvince" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetProvince"></a>

```typescript
public resetProvince(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetState"></a>

```typescript
public resetState(): void
```

##### `resetStateInscription` <a name="resetStateInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStateInscription"></a>

```typescript
public resetStateInscription(): void
```

##### `resetStreetName` <a name="resetStreetName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStreetName"></a>

```typescript
public resetStreetName(): void
```

##### `resetStreetNumber` <a name="resetStreetNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetStreetNumber"></a>

```typescript
public resetStreetNumber(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OspGatewayAddressActionVerification resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isConstruct"></a>

```typescript
import { ospGatewayAddressActionVerification } from 'rhizo-co-terraform-provider-oci'

ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformElement"></a>

```typescript
import { ospGatewayAddressActionVerification } from 'rhizo-co-terraform-provider-oci'

ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformResource"></a>

```typescript
import { ospGatewayAddressActionVerification } from 'rhizo-co-terraform-provider-oci'

ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport"></a>

```typescript
import { ospGatewayAddressActionVerification } from 'rhizo-co-terraform-provider-oci'

ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OspGatewayAddressActionVerification resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OspGatewayAddressActionVerification to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OspGatewayAddressActionVerification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OspGatewayAddressActionVerification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.address">address</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList">OspGatewayAddressActionVerificationAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.quality">quality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference">OspGatewayAddressActionVerificationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.verificationCode">verificationCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.addressKeyInput">addressKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.cityInput">cityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.companyNameInput">companyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.contributorClassInput">contributorClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.countryInput">countryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.countyInput">countyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.departmentNameInput">departmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.emailAddressInput">emailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.firstNameInput">firstNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.internalNumberInput">internalNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.jobTitleInput">jobTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lastNameInput">lastNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line1Input">line1Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line2Input">line2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line3Input">line3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line4Input">line4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.middleNameInput">middleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.municipalInscriptionInput">municipalInscriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.ospHomeRegionInput">ospHomeRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneCountryCodeInput">phoneCountryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.postalCodeInput">postalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provinceInput">provinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInscriptionInput">stateInscriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNameInput">streetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNumberInput">streetNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.addressKey">addressKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.companyName">companyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.contributorClass">contributorClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.county">county</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.departmentName">departmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.internalNumber">internalNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.jobTitle">jobTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line1">line1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line2">line2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line3">line3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line4">line4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.middleName">middleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.municipalInscription">municipalInscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.ospHomeRegion">ospHomeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneCountryCode">phoneCountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.province">province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInscription">stateInscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetName">streetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNumber">streetNumber</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.address"></a>

```typescript
public readonly address: OspGatewayAddressActionVerificationAddressList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList">OspGatewayAddressActionVerificationAddressList</a>

---

##### `quality`<sup>Required</sup> <a name="quality" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.quality"></a>

```typescript
public readonly quality: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.timeouts"></a>

```typescript
public readonly timeouts: OspGatewayAddressActionVerificationTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference">OspGatewayAddressActionVerificationTimeoutsOutputReference</a>

---

##### `verificationCode`<sup>Required</sup> <a name="verificationCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.verificationCode"></a>

```typescript
public readonly verificationCode: string;
```

- *Type:* string

---

##### `addressKeyInput`<sup>Optional</sup> <a name="addressKeyInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.addressKeyInput"></a>

```typescript
public readonly addressKeyInput: string;
```

- *Type:* string

---

##### `cityInput`<sup>Optional</sup> <a name="cityInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.cityInput"></a>

```typescript
public readonly cityInput: string;
```

- *Type:* string

---

##### `companyNameInput`<sup>Optional</sup> <a name="companyNameInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.companyNameInput"></a>

```typescript
public readonly companyNameInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `contributorClassInput`<sup>Optional</sup> <a name="contributorClassInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.contributorClassInput"></a>

```typescript
public readonly contributorClassInput: string;
```

- *Type:* string

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.countryInput"></a>

```typescript
public readonly countryInput: string;
```

- *Type:* string

---

##### `countyInput`<sup>Optional</sup> <a name="countyInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.countyInput"></a>

```typescript
public readonly countyInput: string;
```

- *Type:* string

---

##### `departmentNameInput`<sup>Optional</sup> <a name="departmentNameInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.departmentNameInput"></a>

```typescript
public readonly departmentNameInput: string;
```

- *Type:* string

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.emailAddressInput"></a>

```typescript
public readonly emailAddressInput: string;
```

- *Type:* string

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.firstNameInput"></a>

```typescript
public readonly firstNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `internalNumberInput`<sup>Optional</sup> <a name="internalNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.internalNumberInput"></a>

```typescript
public readonly internalNumberInput: string;
```

- *Type:* string

---

##### `jobTitleInput`<sup>Optional</sup> <a name="jobTitleInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.jobTitleInput"></a>

```typescript
public readonly jobTitleInput: string;
```

- *Type:* string

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lastNameInput"></a>

```typescript
public readonly lastNameInput: string;
```

- *Type:* string

---

##### `line1Input`<sup>Optional</sup> <a name="line1Input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line1Input"></a>

```typescript
public readonly line1Input: string;
```

- *Type:* string

---

##### `line2Input`<sup>Optional</sup> <a name="line2Input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line2Input"></a>

```typescript
public readonly line2Input: string;
```

- *Type:* string

---

##### `line3Input`<sup>Optional</sup> <a name="line3Input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line3Input"></a>

```typescript
public readonly line3Input: string;
```

- *Type:* string

---

##### `line4Input`<sup>Optional</sup> <a name="line4Input" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line4Input"></a>

```typescript
public readonly line4Input: string;
```

- *Type:* string

---

##### `middleNameInput`<sup>Optional</sup> <a name="middleNameInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.middleNameInput"></a>

```typescript
public readonly middleNameInput: string;
```

- *Type:* string

---

##### `municipalInscriptionInput`<sup>Optional</sup> <a name="municipalInscriptionInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.municipalInscriptionInput"></a>

```typescript
public readonly municipalInscriptionInput: string;
```

- *Type:* string

---

##### `ospHomeRegionInput`<sup>Optional</sup> <a name="ospHomeRegionInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.ospHomeRegionInput"></a>

```typescript
public readonly ospHomeRegionInput: string;
```

- *Type:* string

---

##### `phoneCountryCodeInput`<sup>Optional</sup> <a name="phoneCountryCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneCountryCodeInput"></a>

```typescript
public readonly phoneCountryCodeInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string;
```

- *Type:* string

---

##### `provinceInput`<sup>Optional</sup> <a name="provinceInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.provinceInput"></a>

```typescript
public readonly provinceInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `stateInscriptionInput`<sup>Optional</sup> <a name="stateInscriptionInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInscriptionInput"></a>

```typescript
public readonly stateInscriptionInput: string;
```

- *Type:* string

---

##### `streetNameInput`<sup>Optional</sup> <a name="streetNameInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNameInput"></a>

```typescript
public readonly streetNameInput: string;
```

- *Type:* string

---

##### `streetNumberInput`<sup>Optional</sup> <a name="streetNumberInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNumberInput"></a>

```typescript
public readonly streetNumberInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OspGatewayAddressActionVerificationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a>

---

##### `addressKey`<sup>Required</sup> <a name="addressKey" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.addressKey"></a>

```typescript
public readonly addressKey: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.companyName"></a>

```typescript
public readonly companyName: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `contributorClass`<sup>Required</sup> <a name="contributorClass" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.contributorClass"></a>

```typescript
public readonly contributorClass: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `county`<sup>Required</sup> <a name="county" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.county"></a>

```typescript
public readonly county: string;
```

- *Type:* string

---

##### `departmentName`<sup>Required</sup> <a name="departmentName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.departmentName"></a>

```typescript
public readonly departmentName: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalNumber`<sup>Required</sup> <a name="internalNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.internalNumber"></a>

```typescript
public readonly internalNumber: string;
```

- *Type:* string

---

##### `jobTitle`<sup>Required</sup> <a name="jobTitle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.jobTitle"></a>

```typescript
public readonly jobTitle: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `line1`<sup>Required</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line1"></a>

```typescript
public readonly line1: string;
```

- *Type:* string

---

##### `line2`<sup>Required</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line2"></a>

```typescript
public readonly line2: string;
```

- *Type:* string

---

##### `line3`<sup>Required</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line3"></a>

```typescript
public readonly line3: string;
```

- *Type:* string

---

##### `line4`<sup>Required</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.line4"></a>

```typescript
public readonly line4: string;
```

- *Type:* string

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.middleName"></a>

```typescript
public readonly middleName: string;
```

- *Type:* string

---

##### `municipalInscription`<sup>Required</sup> <a name="municipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.municipalInscription"></a>

```typescript
public readonly municipalInscription: string;
```

- *Type:* string

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.ospHomeRegion"></a>

```typescript
public readonly ospHomeRegion: string;
```

- *Type:* string

---

##### `phoneCountryCode`<sup>Required</sup> <a name="phoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneCountryCode"></a>

```typescript
public readonly phoneCountryCode: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `province`<sup>Required</sup> <a name="province" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateInscription`<sup>Required</sup> <a name="stateInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.stateInscription"></a>

```typescript
public readonly stateInscription: string;
```

- *Type:* string

---

##### `streetName`<sup>Required</sup> <a name="streetName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetName"></a>

```typescript
public readonly streetName: string;
```

- *Type:* string

---

##### `streetNumber`<sup>Required</sup> <a name="streetNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.streetNumber"></a>

```typescript
public readonly streetNumber: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerification.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OspGatewayAddressActionVerificationAddress <a name="OspGatewayAddressActionVerificationAddress" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddress.Initializer"></a>

```typescript
import { ospGatewayAddressActionVerification } from 'rhizo-co-terraform-provider-oci'

const ospGatewayAddressActionVerificationAddress: ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddress = { ... }
```


### OspGatewayAddressActionVerificationConfig <a name="OspGatewayAddressActionVerificationConfig" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.Initializer"></a>

```typescript
import { ospGatewayAddressActionVerification } from 'rhizo-co-terraform-provider-oci'

const ospGatewayAddressActionVerificationConfig: ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#compartment_id OspGatewayAddressActionVerification#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.ospHomeRegion">ospHomeRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#osp_home_region OspGatewayAddressActionVerification#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.addressKey">addressKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#address_key OspGatewayAddressActionVerification#address_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.city">city</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#city OspGatewayAddressActionVerification#city}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.companyName">companyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#company_name OspGatewayAddressActionVerification#company_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.contributorClass">contributorClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#contributor_class OspGatewayAddressActionVerification#contributor_class}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.country">country</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#country OspGatewayAddressActionVerification#country}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.county">county</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#county OspGatewayAddressActionVerification#county}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.departmentName">departmentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#department_name OspGatewayAddressActionVerification#department_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.emailAddress">emailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#email_address OspGatewayAddressActionVerification#email_address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.firstName">firstName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#first_name OspGatewayAddressActionVerification#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#id OspGatewayAddressActionVerification#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.internalNumber">internalNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#internal_number OspGatewayAddressActionVerification#internal_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.jobTitle">jobTitle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#job_title OspGatewayAddressActionVerification#job_title}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.lastName">lastName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#last_name OspGatewayAddressActionVerification#last_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line1">line1</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line1 OspGatewayAddressActionVerification#line1}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line2">line2</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line2 OspGatewayAddressActionVerification#line2}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line3">line3</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line3 OspGatewayAddressActionVerification#line3}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line4">line4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line4 OspGatewayAddressActionVerification#line4}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.middleName">middleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#middle_name OspGatewayAddressActionVerification#middle_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.municipalInscription">municipalInscription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#municipal_inscription OspGatewayAddressActionVerification#municipal_inscription}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.phoneCountryCode">phoneCountryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_country_code OspGatewayAddressActionVerification#phone_country_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_number OspGatewayAddressActionVerification#phone_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.postalCode">postalCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#postal_code OspGatewayAddressActionVerification#postal_code}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.province">province</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#province OspGatewayAddressActionVerification#province}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state OspGatewayAddressActionVerification#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.stateInscription">stateInscription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state_inscription OspGatewayAddressActionVerification#state_inscription}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.streetName">streetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#street_name OspGatewayAddressActionVerification#street_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.streetNumber">streetNumber</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#street_number OspGatewayAddressActionVerification#street_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#compartment_id OspGatewayAddressActionVerification#compartment_id}.

---

##### `ospHomeRegion`<sup>Required</sup> <a name="ospHomeRegion" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.ospHomeRegion"></a>

```typescript
public readonly ospHomeRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#osp_home_region OspGatewayAddressActionVerification#osp_home_region}.

---

##### `addressKey`<sup>Optional</sup> <a name="addressKey" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.addressKey"></a>

```typescript
public readonly addressKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#address_key OspGatewayAddressActionVerification#address_key}.

---

##### `city`<sup>Optional</sup> <a name="city" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#city OspGatewayAddressActionVerification#city}.

---

##### `companyName`<sup>Optional</sup> <a name="companyName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.companyName"></a>

```typescript
public readonly companyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#company_name OspGatewayAddressActionVerification#company_name}.

---

##### `contributorClass`<sup>Optional</sup> <a name="contributorClass" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.contributorClass"></a>

```typescript
public readonly contributorClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#contributor_class OspGatewayAddressActionVerification#contributor_class}.

---

##### `country`<sup>Optional</sup> <a name="country" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#country OspGatewayAddressActionVerification#country}.

---

##### `county`<sup>Optional</sup> <a name="county" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.county"></a>

```typescript
public readonly county: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#county OspGatewayAddressActionVerification#county}.

---

##### `departmentName`<sup>Optional</sup> <a name="departmentName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.departmentName"></a>

```typescript
public readonly departmentName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#department_name OspGatewayAddressActionVerification#department_name}.

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#email_address OspGatewayAddressActionVerification#email_address}.

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#first_name OspGatewayAddressActionVerification#first_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#id OspGatewayAddressActionVerification#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internalNumber`<sup>Optional</sup> <a name="internalNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.internalNumber"></a>

```typescript
public readonly internalNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#internal_number OspGatewayAddressActionVerification#internal_number}.

---

##### `jobTitle`<sup>Optional</sup> <a name="jobTitle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.jobTitle"></a>

```typescript
public readonly jobTitle: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#job_title OspGatewayAddressActionVerification#job_title}.

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#last_name OspGatewayAddressActionVerification#last_name}.

---

##### `line1`<sup>Optional</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line1"></a>

```typescript
public readonly line1: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line1 OspGatewayAddressActionVerification#line1}.

---

##### `line2`<sup>Optional</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line2"></a>

```typescript
public readonly line2: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line2 OspGatewayAddressActionVerification#line2}.

---

##### `line3`<sup>Optional</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line3"></a>

```typescript
public readonly line3: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line3 OspGatewayAddressActionVerification#line3}.

---

##### `line4`<sup>Optional</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.line4"></a>

```typescript
public readonly line4: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#line4 OspGatewayAddressActionVerification#line4}.

---

##### `middleName`<sup>Optional</sup> <a name="middleName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.middleName"></a>

```typescript
public readonly middleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#middle_name OspGatewayAddressActionVerification#middle_name}.

---

##### `municipalInscription`<sup>Optional</sup> <a name="municipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.municipalInscription"></a>

```typescript
public readonly municipalInscription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#municipal_inscription OspGatewayAddressActionVerification#municipal_inscription}.

---

##### `phoneCountryCode`<sup>Optional</sup> <a name="phoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.phoneCountryCode"></a>

```typescript
public readonly phoneCountryCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_country_code OspGatewayAddressActionVerification#phone_country_code}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#phone_number OspGatewayAddressActionVerification#phone_number}.

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#postal_code OspGatewayAddressActionVerification#postal_code}.

---

##### `province`<sup>Optional</sup> <a name="province" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#province OspGatewayAddressActionVerification#province}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state OspGatewayAddressActionVerification#state}.

---

##### `stateInscription`<sup>Optional</sup> <a name="stateInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.stateInscription"></a>

```typescript
public readonly stateInscription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#state_inscription OspGatewayAddressActionVerification#state_inscription}.

---

##### `streetName`<sup>Optional</sup> <a name="streetName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.streetName"></a>

```typescript
public readonly streetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#street_name OspGatewayAddressActionVerification#street_name}.

---

##### `streetNumber`<sup>Optional</sup> <a name="streetNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.streetNumber"></a>

```typescript
public readonly streetNumber: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#street_number OspGatewayAddressActionVerification#street_number}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OspGatewayAddressActionVerificationTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#timeouts OspGatewayAddressActionVerification#timeouts}

---

### OspGatewayAddressActionVerificationTimeouts <a name="OspGatewayAddressActionVerificationTimeouts" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.Initializer"></a>

```typescript
import { ospGatewayAddressActionVerification } from 'rhizo-co-terraform-provider-oci'

const ospGatewayAddressActionVerificationTimeouts: ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#create OspGatewayAddressActionVerification#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#delete OspGatewayAddressActionVerification#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#update OspGatewayAddressActionVerification#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#create OspGatewayAddressActionVerification#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#delete OspGatewayAddressActionVerification#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/osp_gateway_address_action_verification#update OspGatewayAddressActionVerification#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OspGatewayAddressActionVerificationAddressList <a name="OspGatewayAddressActionVerificationAddressList" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer"></a>

```typescript
import { ospGatewayAddressActionVerification } from 'rhizo-co-terraform-provider-oci'

new ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.get"></a>

```typescript
public get(index: number): OspGatewayAddressActionVerificationAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OspGatewayAddressActionVerificationAddressOutputReference <a name="OspGatewayAddressActionVerificationAddressOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer"></a>

```typescript
import { ospGatewayAddressActionVerification } from 'rhizo-co-terraform-provider-oci'

new ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.addressKey">addressKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.city">city</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.companyName">companyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.contributorClass">contributorClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.county">county</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.departmentName">departmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.firstName">firstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.internalNumber">internalNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.jobTitle">jobTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.lastName">lastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line1">line1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line2">line2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line3">line3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line4">line4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.middleName">middleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.municipalInscription">municipalInscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.phoneCountryCode">phoneCountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.province">province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.stateInscription">stateInscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.streetName">streetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.streetNumber">streetNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddress">OspGatewayAddressActionVerificationAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressKey`<sup>Required</sup> <a name="addressKey" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.addressKey"></a>

```typescript
public readonly addressKey: string;
```

- *Type:* string

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.city"></a>

```typescript
public readonly city: string;
```

- *Type:* string

---

##### `companyName`<sup>Required</sup> <a name="companyName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.companyName"></a>

```typescript
public readonly companyName: string;
```

- *Type:* string

---

##### `contributorClass`<sup>Required</sup> <a name="contributorClass" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.contributorClass"></a>

```typescript
public readonly contributorClass: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `county`<sup>Required</sup> <a name="county" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.county"></a>

```typescript
public readonly county: string;
```

- *Type:* string

---

##### `departmentName`<sup>Required</sup> <a name="departmentName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.departmentName"></a>

```typescript
public readonly departmentName: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.firstName"></a>

```typescript
public readonly firstName: string;
```

- *Type:* string

---

##### `internalNumber`<sup>Required</sup> <a name="internalNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.internalNumber"></a>

```typescript
public readonly internalNumber: string;
```

- *Type:* string

---

##### `jobTitle`<sup>Required</sup> <a name="jobTitle" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.jobTitle"></a>

```typescript
public readonly jobTitle: string;
```

- *Type:* string

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.lastName"></a>

```typescript
public readonly lastName: string;
```

- *Type:* string

---

##### `line1`<sup>Required</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line1"></a>

```typescript
public readonly line1: string;
```

- *Type:* string

---

##### `line2`<sup>Required</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line2"></a>

```typescript
public readonly line2: string;
```

- *Type:* string

---

##### `line3`<sup>Required</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line3"></a>

```typescript
public readonly line3: string;
```

- *Type:* string

---

##### `line4`<sup>Required</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.line4"></a>

```typescript
public readonly line4: string;
```

- *Type:* string

---

##### `middleName`<sup>Required</sup> <a name="middleName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.middleName"></a>

```typescript
public readonly middleName: string;
```

- *Type:* string

---

##### `municipalInscription`<sup>Required</sup> <a name="municipalInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.municipalInscription"></a>

```typescript
public readonly municipalInscription: string;
```

- *Type:* string

---

##### `phoneCountryCode`<sup>Required</sup> <a name="phoneCountryCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.phoneCountryCode"></a>

```typescript
public readonly phoneCountryCode: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `province`<sup>Required</sup> <a name="province" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateInscription`<sup>Required</sup> <a name="stateInscription" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.stateInscription"></a>

```typescript
public readonly stateInscription: string;
```

- *Type:* string

---

##### `streetName`<sup>Required</sup> <a name="streetName" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.streetName"></a>

```typescript
public readonly streetName: string;
```

- *Type:* string

---

##### `streetNumber`<sup>Required</sup> <a name="streetNumber" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.streetNumber"></a>

```typescript
public readonly streetNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OspGatewayAddressActionVerificationAddress;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationAddress">OspGatewayAddressActionVerificationAddress</a>

---


### OspGatewayAddressActionVerificationTimeoutsOutputReference <a name="OspGatewayAddressActionVerificationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.Initializer"></a>

```typescript
import { ospGatewayAddressActionVerification } from 'rhizo-co-terraform-provider-oci'

new ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OspGatewayAddressActionVerificationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.ospGatewayAddressActionVerification.OspGatewayAddressActionVerificationTimeouts">OspGatewayAddressActionVerificationTimeouts</a>

---



