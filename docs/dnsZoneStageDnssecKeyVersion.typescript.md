# `dnsZoneStageDnssecKeyVersion` Submodule <a name="`dnsZoneStageDnssecKeyVersion` Submodule" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsZoneStageDnssecKeyVersion <a name="DnsZoneStageDnssecKeyVersion" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version oci_dns_zone_stage_dnssec_key_version}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer"></a>

```typescript
import { dnsZoneStageDnssecKeyVersion } from 'rhizo-co-terraform-provider-oci'

new dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion(scope: Construct, id: string, config: DnsZoneStageDnssecKeyVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig">DnsZoneStageDnssecKeyVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig">DnsZoneStageDnssecKeyVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.putTimeouts"></a>

```typescript
public putTimeouts(value: DnsZoneStageDnssecKeyVersionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts">DnsZoneStageDnssecKeyVersionTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetScope` <a name="resetScope" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DnsZoneStageDnssecKeyVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.isConstruct"></a>

```typescript
import { dnsZoneStageDnssecKeyVersion } from 'rhizo-co-terraform-provider-oci'

dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.isTerraformElement"></a>

```typescript
import { dnsZoneStageDnssecKeyVersion } from 'rhizo-co-terraform-provider-oci'

dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.isTerraformResource"></a>

```typescript
import { dnsZoneStageDnssecKeyVersion } from 'rhizo-co-terraform-provider-oci'

dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.generateConfigForImport"></a>

```typescript
import { dnsZoneStageDnssecKeyVersion } from 'rhizo-co-terraform-provider-oci'

dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DnsZoneStageDnssecKeyVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DnsZoneStageDnssecKeyVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DnsZoneStageDnssecKeyVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DnsZoneStageDnssecKeyVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference">DnsZoneStageDnssecKeyVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.predecessorDnssecKeyVersionUuidInput">predecessorDnssecKeyVersionUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts">DnsZoneStageDnssecKeyVersionTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.zoneIdInput">zoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.predecessorDnssecKeyVersionUuid">predecessorDnssecKeyVersionUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.timeouts"></a>

```typescript
public readonly timeouts: DnsZoneStageDnssecKeyVersionTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference">DnsZoneStageDnssecKeyVersionTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `predecessorDnssecKeyVersionUuidInput`<sup>Optional</sup> <a name="predecessorDnssecKeyVersionUuidInput" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.predecessorDnssecKeyVersionUuidInput"></a>

```typescript
public readonly predecessorDnssecKeyVersionUuidInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DnsZoneStageDnssecKeyVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts">DnsZoneStageDnssecKeyVersionTimeouts</a>

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.zoneIdInput"></a>

```typescript
public readonly zoneIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `predecessorDnssecKeyVersionUuid`<sup>Required</sup> <a name="predecessorDnssecKeyVersionUuid" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.predecessorDnssecKeyVersionUuid"></a>

```typescript
public readonly predecessorDnssecKeyVersionUuid: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsZoneStageDnssecKeyVersionConfig <a name="DnsZoneStageDnssecKeyVersionConfig" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.Initializer"></a>

```typescript
import { dnsZoneStageDnssecKeyVersion } from 'rhizo-co-terraform-provider-oci'

const dnsZoneStageDnssecKeyVersionConfig: dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.predecessorDnssecKeyVersionUuid">predecessorDnssecKeyVersionUuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#predecessor_dnssec_key_version_uuid DnsZoneStageDnssecKeyVersion#predecessor_dnssec_key_version_uuid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.zoneId">zoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#zone_id DnsZoneStageDnssecKeyVersion#zone_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#id DnsZoneStageDnssecKeyVersion#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#scope DnsZoneStageDnssecKeyVersion#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts">DnsZoneStageDnssecKeyVersionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `predecessorDnssecKeyVersionUuid`<sup>Required</sup> <a name="predecessorDnssecKeyVersionUuid" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.predecessorDnssecKeyVersionUuid"></a>

```typescript
public readonly predecessorDnssecKeyVersionUuid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#predecessor_dnssec_key_version_uuid DnsZoneStageDnssecKeyVersion#predecessor_dnssec_key_version_uuid}.

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#zone_id DnsZoneStageDnssecKeyVersion#zone_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#id DnsZoneStageDnssecKeyVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#scope DnsZoneStageDnssecKeyVersion#scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DnsZoneStageDnssecKeyVersionTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts">DnsZoneStageDnssecKeyVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#timeouts DnsZoneStageDnssecKeyVersion#timeouts}

---

### DnsZoneStageDnssecKeyVersionTimeouts <a name="DnsZoneStageDnssecKeyVersionTimeouts" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts.Initializer"></a>

```typescript
import { dnsZoneStageDnssecKeyVersion } from 'rhizo-co-terraform-provider-oci'

const dnsZoneStageDnssecKeyVersionTimeouts: dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#create DnsZoneStageDnssecKeyVersion#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#delete DnsZoneStageDnssecKeyVersion#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#update DnsZoneStageDnssecKeyVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#create DnsZoneStageDnssecKeyVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#delete DnsZoneStageDnssecKeyVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone_stage_dnssec_key_version#update DnsZoneStageDnssecKeyVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DnsZoneStageDnssecKeyVersionTimeoutsOutputReference <a name="DnsZoneStageDnssecKeyVersionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.Initializer"></a>

```typescript
import { dnsZoneStageDnssecKeyVersion } from 'rhizo-co-terraform-provider-oci'

new dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts">DnsZoneStageDnssecKeyVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DnsZoneStageDnssecKeyVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dnsZoneStageDnssecKeyVersion.DnsZoneStageDnssecKeyVersionTimeouts">DnsZoneStageDnssecKeyVersionTimeouts</a>

---



