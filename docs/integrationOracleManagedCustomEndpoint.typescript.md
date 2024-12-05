# `integrationOracleManagedCustomEndpoint` Submodule <a name="`integrationOracleManagedCustomEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationOracleManagedCustomEndpoint <a name="IntegrationOracleManagedCustomEndpoint" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint oci_integration_oracle_managed_custom_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer"></a>

```typescript
import { integrationOracleManagedCustomEndpoint } from 'rhizo-co-terraform-provider-oci'

new integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint(scope: Construct, id: string, config: IntegrationOracleManagedCustomEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig">IntegrationOracleManagedCustomEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig">IntegrationOracleManagedCustomEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetDnsType">resetDnsType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetDnsZoneName">resetDnsZoneName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetManagedType">resetManagedType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: IntegrationOracleManagedCustomEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts">IntegrationOracleManagedCustomEndpointTimeouts</a>

---

##### `resetDnsType` <a name="resetDnsType" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetDnsType"></a>

```typescript
public resetDnsType(): void
```

##### `resetDnsZoneName` <a name="resetDnsZoneName" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetDnsZoneName"></a>

```typescript
public resetDnsZoneName(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetManagedType` <a name="resetManagedType" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetManagedType"></a>

```typescript
public resetManagedType(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationOracleManagedCustomEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isConstruct"></a>

```typescript
import { integrationOracleManagedCustomEndpoint } from 'rhizo-co-terraform-provider-oci'

integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isTerraformElement"></a>

```typescript
import { integrationOracleManagedCustomEndpoint } from 'rhizo-co-terraform-provider-oci'

integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isTerraformResource"></a>

```typescript
import { integrationOracleManagedCustomEndpoint } from 'rhizo-co-terraform-provider-oci'

integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.generateConfigForImport"></a>

```typescript
import { integrationOracleManagedCustomEndpoint } from 'rhizo-co-terraform-provider-oci'

integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IntegrationOracleManagedCustomEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationOracleManagedCustomEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationOracleManagedCustomEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationOracleManagedCustomEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference">IntegrationOracleManagedCustomEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsTypeInput">dnsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsZoneNameInput">dnsZoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.integrationInstanceIdInput">integrationInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.managedTypeInput">managedTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts">IntegrationOracleManagedCustomEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsType">dnsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsZoneName">dnsZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.integrationInstanceId">integrationInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.managedType">managedType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: IntegrationOracleManagedCustomEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference">IntegrationOracleManagedCustomEndpointTimeoutsOutputReference</a>

---

##### `dnsTypeInput`<sup>Optional</sup> <a name="dnsTypeInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsTypeInput"></a>

```typescript
public readonly dnsTypeInput: string;
```

- *Type:* string

---

##### `dnsZoneNameInput`<sup>Optional</sup> <a name="dnsZoneNameInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsZoneNameInput"></a>

```typescript
public readonly dnsZoneNameInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationInstanceIdInput`<sup>Optional</sup> <a name="integrationInstanceIdInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.integrationInstanceIdInput"></a>

```typescript
public readonly integrationInstanceIdInput: string;
```

- *Type:* string

---

##### `managedTypeInput`<sup>Optional</sup> <a name="managedTypeInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.managedTypeInput"></a>

```typescript
public readonly managedTypeInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IntegrationOracleManagedCustomEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts">IntegrationOracleManagedCustomEndpointTimeouts</a>

---

##### `dnsType`<sup>Required</sup> <a name="dnsType" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsType"></a>

```typescript
public readonly dnsType: string;
```

- *Type:* string

---

##### `dnsZoneName`<sup>Required</sup> <a name="dnsZoneName" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.dnsZoneName"></a>

```typescript
public readonly dnsZoneName: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationInstanceId`<sup>Required</sup> <a name="integrationInstanceId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.integrationInstanceId"></a>

```typescript
public readonly integrationInstanceId: string;
```

- *Type:* string

---

##### `managedType`<sup>Required</sup> <a name="managedType" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.managedType"></a>

```typescript
public readonly managedType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationOracleManagedCustomEndpointConfig <a name="IntegrationOracleManagedCustomEndpointConfig" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.Initializer"></a>

```typescript
import { integrationOracleManagedCustomEndpoint } from 'rhizo-co-terraform-provider-oci'

const integrationOracleManagedCustomEndpointConfig: integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.hostname">hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#hostname IntegrationOracleManagedCustomEndpoint#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.integrationInstanceId">integrationInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#integration_instance_id IntegrationOracleManagedCustomEndpoint#integration_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.dnsType">dnsType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#dns_type IntegrationOracleManagedCustomEndpoint#dns_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.dnsZoneName">dnsZoneName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#dns_zone_name IntegrationOracleManagedCustomEndpoint#dns_zone_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#id IntegrationOracleManagedCustomEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.managedType">managedType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#managed_type IntegrationOracleManagedCustomEndpoint#managed_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#state IntegrationOracleManagedCustomEndpoint#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts">IntegrationOracleManagedCustomEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#hostname IntegrationOracleManagedCustomEndpoint#hostname}.

---

##### `integrationInstanceId`<sup>Required</sup> <a name="integrationInstanceId" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.integrationInstanceId"></a>

```typescript
public readonly integrationInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#integration_instance_id IntegrationOracleManagedCustomEndpoint#integration_instance_id}.

---

##### `dnsType`<sup>Optional</sup> <a name="dnsType" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.dnsType"></a>

```typescript
public readonly dnsType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#dns_type IntegrationOracleManagedCustomEndpoint#dns_type}.

---

##### `dnsZoneName`<sup>Optional</sup> <a name="dnsZoneName" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.dnsZoneName"></a>

```typescript
public readonly dnsZoneName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#dns_zone_name IntegrationOracleManagedCustomEndpoint#dns_zone_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#id IntegrationOracleManagedCustomEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedType`<sup>Optional</sup> <a name="managedType" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.managedType"></a>

```typescript
public readonly managedType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#managed_type IntegrationOracleManagedCustomEndpoint#managed_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#state IntegrationOracleManagedCustomEndpoint#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IntegrationOracleManagedCustomEndpointTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts">IntegrationOracleManagedCustomEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#timeouts IntegrationOracleManagedCustomEndpoint#timeouts}

---

### IntegrationOracleManagedCustomEndpointTimeouts <a name="IntegrationOracleManagedCustomEndpointTimeouts" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.Initializer"></a>

```typescript
import { integrationOracleManagedCustomEndpoint } from 'rhizo-co-terraform-provider-oci'

const integrationOracleManagedCustomEndpointTimeouts: integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#create IntegrationOracleManagedCustomEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#delete IntegrationOracleManagedCustomEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#update IntegrationOracleManagedCustomEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#create IntegrationOracleManagedCustomEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#delete IntegrationOracleManagedCustomEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/integration_oracle_managed_custom_endpoint#update IntegrationOracleManagedCustomEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationOracleManagedCustomEndpointTimeoutsOutputReference <a name="IntegrationOracleManagedCustomEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { integrationOracleManagedCustomEndpoint } from 'rhizo-co-terraform-provider-oci'

new integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts">IntegrationOracleManagedCustomEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationOracleManagedCustomEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.integrationOracleManagedCustomEndpoint.IntegrationOracleManagedCustomEndpointTimeouts">IntegrationOracleManagedCustomEndpointTimeouts</a>

---



