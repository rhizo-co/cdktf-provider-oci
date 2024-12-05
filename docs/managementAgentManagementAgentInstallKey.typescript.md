# `managementAgentManagementAgentInstallKey` Submodule <a name="`managementAgentManagementAgentInstallKey` Submodule" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagementAgentManagementAgentInstallKey <a name="ManagementAgentManagementAgentInstallKey" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key oci_management_agent_management_agent_install_key}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer"></a>

```typescript
import { managementAgentManagementAgentInstallKey } from 'rhizo-co-terraform-provider-oci'

new managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey(scope: Construct, id: string, config: ManagementAgentManagementAgentInstallKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig">ManagementAgentManagementAgentInstallKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig">ManagementAgentManagementAgentInstallKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetAllowedKeyInstallCount">resetAllowedKeyInstallCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetIsUnlimited">resetIsUnlimited</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetTimeExpires">resetTimeExpires</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.putTimeouts"></a>

```typescript
public putTimeouts(value: ManagementAgentManagementAgentInstallKeyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts">ManagementAgentManagementAgentInstallKeyTimeouts</a>

---

##### `resetAllowedKeyInstallCount` <a name="resetAllowedKeyInstallCount" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetAllowedKeyInstallCount"></a>

```typescript
public resetAllowedKeyInstallCount(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsUnlimited` <a name="resetIsUnlimited" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetIsUnlimited"></a>

```typescript
public resetIsUnlimited(): void
```

##### `resetTimeExpires` <a name="resetTimeExpires" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetTimeExpires"></a>

```typescript
public resetTimeExpires(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagementAgentManagementAgentInstallKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isConstruct"></a>

```typescript
import { managementAgentManagementAgentInstallKey } from 'rhizo-co-terraform-provider-oci'

managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isTerraformElement"></a>

```typescript
import { managementAgentManagementAgentInstallKey } from 'rhizo-co-terraform-provider-oci'

managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isTerraformResource"></a>

```typescript
import { managementAgentManagementAgentInstallKey } from 'rhizo-co-terraform-provider-oci'

managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.generateConfigForImport"></a>

```typescript
import { managementAgentManagementAgentInstallKey } from 'rhizo-co-terraform-provider-oci'

managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ManagementAgentManagementAgentInstallKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagementAgentManagementAgentInstallKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagementAgentManagementAgentInstallKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagementAgentManagementAgentInstallKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.createdByPrincipalId">createdByPrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.currentKeyInstallCount">currentKeyInstallCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference">ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.allowedKeyInstallCountInput">allowedKeyInstallCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.isUnlimitedInput">isUnlimitedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeExpiresInput">timeExpiresInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts">ManagementAgentManagementAgentInstallKeyTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.allowedKeyInstallCount">allowedKeyInstallCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.isUnlimited">isUnlimited</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeExpires">timeExpires</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdByPrincipalId`<sup>Required</sup> <a name="createdByPrincipalId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.createdByPrincipalId"></a>

```typescript
public readonly createdByPrincipalId: string;
```

- *Type:* string

---

##### `currentKeyInstallCount`<sup>Required</sup> <a name="currentKeyInstallCount" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.currentKeyInstallCount"></a>

```typescript
public readonly currentKeyInstallCount: number;
```

- *Type:* number

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeouts"></a>

```typescript
public readonly timeouts: ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference">ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `allowedKeyInstallCountInput`<sup>Optional</sup> <a name="allowedKeyInstallCountInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.allowedKeyInstallCountInput"></a>

```typescript
public readonly allowedKeyInstallCountInput: number;
```

- *Type:* number

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isUnlimitedInput`<sup>Optional</sup> <a name="isUnlimitedInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.isUnlimitedInput"></a>

```typescript
public readonly isUnlimitedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeExpiresInput`<sup>Optional</sup> <a name="timeExpiresInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeExpiresInput"></a>

```typescript
public readonly timeExpiresInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ManagementAgentManagementAgentInstallKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts">ManagementAgentManagementAgentInstallKeyTimeouts</a>

---

##### `allowedKeyInstallCount`<sup>Required</sup> <a name="allowedKeyInstallCount" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.allowedKeyInstallCount"></a>

```typescript
public readonly allowedKeyInstallCount: number;
```

- *Type:* number

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isUnlimited`<sup>Required</sup> <a name="isUnlimited" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.isUnlimited"></a>

```typescript
public readonly isUnlimited: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeExpires`<sup>Required</sup> <a name="timeExpires" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeExpires"></a>

```typescript
public readonly timeExpires: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagementAgentManagementAgentInstallKeyConfig <a name="ManagementAgentManagementAgentInstallKeyConfig" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.Initializer"></a>

```typescript
import { managementAgentManagementAgentInstallKey } from 'rhizo-co-terraform-provider-oci'

const managementAgentManagementAgentInstallKeyConfig: managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#compartment_id ManagementAgentManagementAgentInstallKey#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#display_name ManagementAgentManagementAgentInstallKey#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.allowedKeyInstallCount">allowedKeyInstallCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#allowed_key_install_count ManagementAgentManagementAgentInstallKey#allowed_key_install_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#id ManagementAgentManagementAgentInstallKey#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.isUnlimited">isUnlimited</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#is_unlimited ManagementAgentManagementAgentInstallKey#is_unlimited}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.timeExpires">timeExpires</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#time_expires ManagementAgentManagementAgentInstallKey#time_expires}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts">ManagementAgentManagementAgentInstallKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#compartment_id ManagementAgentManagementAgentInstallKey#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#display_name ManagementAgentManagementAgentInstallKey#display_name}.

---

##### `allowedKeyInstallCount`<sup>Optional</sup> <a name="allowedKeyInstallCount" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.allowedKeyInstallCount"></a>

```typescript
public readonly allowedKeyInstallCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#allowed_key_install_count ManagementAgentManagementAgentInstallKey#allowed_key_install_count}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#id ManagementAgentManagementAgentInstallKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isUnlimited`<sup>Optional</sup> <a name="isUnlimited" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.isUnlimited"></a>

```typescript
public readonly isUnlimited: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#is_unlimited ManagementAgentManagementAgentInstallKey#is_unlimited}.

---

##### `timeExpires`<sup>Optional</sup> <a name="timeExpires" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.timeExpires"></a>

```typescript
public readonly timeExpires: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#time_expires ManagementAgentManagementAgentInstallKey#time_expires}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ManagementAgentManagementAgentInstallKeyTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts">ManagementAgentManagementAgentInstallKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#timeouts ManagementAgentManagementAgentInstallKey#timeouts}

---

### ManagementAgentManagementAgentInstallKeyTimeouts <a name="ManagementAgentManagementAgentInstallKeyTimeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.Initializer"></a>

```typescript
import { managementAgentManagementAgentInstallKey } from 'rhizo-co-terraform-provider-oci'

const managementAgentManagementAgentInstallKeyTimeouts: managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#create ManagementAgentManagementAgentInstallKey#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#delete ManagementAgentManagementAgentInstallKey#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#update ManagementAgentManagementAgentInstallKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#create ManagementAgentManagementAgentInstallKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#delete ManagementAgentManagementAgentInstallKey#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#update ManagementAgentManagementAgentInstallKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference <a name="ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.Initializer"></a>

```typescript
import { managementAgentManagementAgentInstallKey } from 'rhizo-co-terraform-provider-oci'

new managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts">ManagementAgentManagementAgentInstallKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagementAgentManagementAgentInstallKeyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts">ManagementAgentManagementAgentInstallKeyTimeouts</a>

---



