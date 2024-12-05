# `dnsZone` Submodule <a name="`dnsZone` Submodule" id="rhizo-co-terraform-provider-oci.dnsZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsZone <a name="DnsZone" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone oci_dns_zone}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

new dnsZone.DnsZone(scope: Construct, id: string, config: DnsZoneConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig">DnsZoneConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig">DnsZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.putExternalDownstreams">putExternalDownstreams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.putExternalMasters">putExternalMasters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.resetDnssecState">resetDnssecState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.resetExternalDownstreams">resetExternalDownstreams</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.resetExternalMasters">resetExternalMasters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.resetViewId">resetViewId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExternalDownstreams` <a name="putExternalDownstreams" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.putExternalDownstreams"></a>

```typescript
public putExternalDownstreams(value: IResolvable | DnsZoneExternalDownstreams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.putExternalDownstreams.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreams">DnsZoneExternalDownstreams</a>[]

---

##### `putExternalMasters` <a name="putExternalMasters" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.putExternalMasters"></a>

```typescript
public putExternalMasters(value: IResolvable | DnsZoneExternalMasters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.putExternalMasters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMasters">DnsZoneExternalMasters</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.putTimeouts"></a>

```typescript
public putTimeouts(value: DnsZoneTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeouts">DnsZoneTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDnssecState` <a name="resetDnssecState" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.resetDnssecState"></a>

```typescript
public resetDnssecState(): void
```

##### `resetExternalDownstreams` <a name="resetExternalDownstreams" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.resetExternalDownstreams"></a>

```typescript
public resetExternalDownstreams(): void
```

##### `resetExternalMasters` <a name="resetExternalMasters" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.resetExternalMasters"></a>

```typescript
public resetExternalMasters(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.resetId"></a>

```typescript
public resetId(): void
```

##### `resetScope` <a name="resetScope" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetViewId` <a name="resetViewId" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.resetViewId"></a>

```typescript
public resetViewId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DnsZone resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.isConstruct"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

dnsZone.DnsZone.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.isTerraformElement"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

dnsZone.DnsZone.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.isTerraformResource"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

dnsZone.DnsZone.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.generateConfigForImport"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

dnsZone.DnsZone.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DnsZone resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DnsZone to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DnsZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DnsZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.dnssecConfig">dnssecConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigList">DnsZoneDnssecConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.externalDownstreams">externalDownstreams</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList">DnsZoneExternalDownstreamsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.externalMasters">externalMasters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList">DnsZoneExternalMastersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.isProtected">isProtected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.nameservers">nameservers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversList">DnsZoneNameserversList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.selfAttribute">selfAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.serial">serial</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference">DnsZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.zoneTransferServers">zoneTransferServers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersList">DnsZoneZoneTransferServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.dnssecStateInput">dnssecStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.externalDownstreamsInput">externalDownstreamsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreams">DnsZoneExternalDownstreams</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.externalMastersInput">externalMastersInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMasters">DnsZoneExternalMasters</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeouts">DnsZoneTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.viewIdInput">viewIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.zoneTypeInput">zoneTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.dnssecState">dnssecState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.viewId">viewId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.zoneType">zoneType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dnssecConfig`<sup>Required</sup> <a name="dnssecConfig" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.dnssecConfig"></a>

```typescript
public readonly dnssecConfig: DnsZoneDnssecConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigList">DnsZoneDnssecConfigList</a>

---

##### `externalDownstreams`<sup>Required</sup> <a name="externalDownstreams" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.externalDownstreams"></a>

```typescript
public readonly externalDownstreams: DnsZoneExternalDownstreamsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList">DnsZoneExternalDownstreamsList</a>

---

##### `externalMasters`<sup>Required</sup> <a name="externalMasters" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.externalMasters"></a>

```typescript
public readonly externalMasters: DnsZoneExternalMastersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList">DnsZoneExternalMastersList</a>

---

##### `isProtected`<sup>Required</sup> <a name="isProtected" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.isProtected"></a>

```typescript
public readonly isProtected: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.nameservers"></a>

```typescript
public readonly nameservers: DnsZoneNameserversList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversList">DnsZoneNameserversList</a>

---

##### `selfAttribute`<sup>Required</sup> <a name="selfAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.selfAttribute"></a>

```typescript
public readonly selfAttribute: string;
```

- *Type:* string

---

##### `serial`<sup>Required</sup> <a name="serial" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.serial"></a>

```typescript
public readonly serial: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.timeouts"></a>

```typescript
public readonly timeouts: DnsZoneTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference">DnsZoneTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `zoneTransferServers`<sup>Required</sup> <a name="zoneTransferServers" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.zoneTransferServers"></a>

```typescript
public readonly zoneTransferServers: DnsZoneZoneTransferServersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersList">DnsZoneZoneTransferServersList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `dnssecStateInput`<sup>Optional</sup> <a name="dnssecStateInput" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.dnssecStateInput"></a>

```typescript
public readonly dnssecStateInput: string;
```

- *Type:* string

---

##### `externalDownstreamsInput`<sup>Optional</sup> <a name="externalDownstreamsInput" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.externalDownstreamsInput"></a>

```typescript
public readonly externalDownstreamsInput: IResolvable | DnsZoneExternalDownstreams[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreams">DnsZoneExternalDownstreams</a>[]

---

##### `externalMastersInput`<sup>Optional</sup> <a name="externalMastersInput" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.externalMastersInput"></a>

```typescript
public readonly externalMastersInput: IResolvable | DnsZoneExternalMasters[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMasters">DnsZoneExternalMasters</a>[]

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DnsZoneTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeouts">DnsZoneTimeouts</a>

---

##### `viewIdInput`<sup>Optional</sup> <a name="viewIdInput" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.viewIdInput"></a>

```typescript
public readonly viewIdInput: string;
```

- *Type:* string

---

##### `zoneTypeInput`<sup>Optional</sup> <a name="zoneTypeInput" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.zoneTypeInput"></a>

```typescript
public readonly zoneTypeInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `dnssecState`<sup>Required</sup> <a name="dnssecState" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.dnssecState"></a>

```typescript
public readonly dnssecState: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `viewId`<sup>Required</sup> <a name="viewId" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.viewId"></a>

```typescript
public readonly viewId: string;
```

- *Type:* string

---

##### `zoneType`<sup>Required</sup> <a name="zoneType" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.zoneType"></a>

```typescript
public readonly zoneType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZone.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsZoneConfig <a name="DnsZoneConfig" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

const dnsZoneConfig: dnsZone.DnsZoneConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#compartment_id DnsZone#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#name DnsZone#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.zoneType">zoneType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#zone_type DnsZone#zone_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#defined_tags DnsZone#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.dnssecState">dnssecState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#dnssec_state DnsZone#dnssec_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.externalDownstreams">externalDownstreams</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreams">DnsZoneExternalDownstreams</a>[]</code> | external_downstreams block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.externalMasters">externalMasters</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMasters">DnsZoneExternalMasters</a>[]</code> | external_masters block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#freeform_tags DnsZone#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#id DnsZone#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.scope">scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#scope DnsZone#scope}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeouts">DnsZoneTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.viewId">viewId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#view_id DnsZone#view_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#compartment_id DnsZone#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#name DnsZone#name}.

---

##### `zoneType`<sup>Required</sup> <a name="zoneType" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.zoneType"></a>

```typescript
public readonly zoneType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#zone_type DnsZone#zone_type}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#defined_tags DnsZone#defined_tags}.

---

##### `dnssecState`<sup>Optional</sup> <a name="dnssecState" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.dnssecState"></a>

```typescript
public readonly dnssecState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#dnssec_state DnsZone#dnssec_state}.

---

##### `externalDownstreams`<sup>Optional</sup> <a name="externalDownstreams" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.externalDownstreams"></a>

```typescript
public readonly externalDownstreams: IResolvable | DnsZoneExternalDownstreams[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreams">DnsZoneExternalDownstreams</a>[]

external_downstreams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#external_downstreams DnsZone#external_downstreams}

---

##### `externalMasters`<sup>Optional</sup> <a name="externalMasters" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.externalMasters"></a>

```typescript
public readonly externalMasters: IResolvable | DnsZoneExternalMasters[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMasters">DnsZoneExternalMasters</a>[]

external_masters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#external_masters DnsZone#external_masters}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#freeform_tags DnsZone#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#id DnsZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#scope DnsZone#scope}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DnsZoneTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeouts">DnsZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#timeouts DnsZone#timeouts}

---

##### `viewId`<sup>Optional</sup> <a name="viewId" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneConfig.property.viewId"></a>

```typescript
public readonly viewId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#view_id DnsZone#view_id}.

---

### DnsZoneDnssecConfig <a name="DnsZoneDnssecConfig" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfig.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

const dnsZoneDnssecConfig: dnsZone.DnsZoneDnssecConfig = { ... }
```


### DnsZoneDnssecConfigKskDnssecKeyVersions <a name="DnsZoneDnssecConfigKskDnssecKeyVersions" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersions.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

const dnsZoneDnssecConfigKskDnssecKeyVersions: dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersions = { ... }
```


### DnsZoneDnssecConfigKskDnssecKeyVersionsDsData <a name="DnsZoneDnssecConfigKskDnssecKeyVersionsDsData" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsData.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

const dnsZoneDnssecConfigKskDnssecKeyVersionsDsData: dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsData = { ... }
```


### DnsZoneDnssecConfigZskDnssecKeyVersions <a name="DnsZoneDnssecConfigZskDnssecKeyVersions" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersions.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

const dnsZoneDnssecConfigZskDnssecKeyVersions: dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersions = { ... }
```


### DnsZoneExternalDownstreams <a name="DnsZoneExternalDownstreams" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreams.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

const dnsZoneExternalDownstreams: dnsZone.DnsZoneExternalDownstreams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreams.property.address">address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#address DnsZone#address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreams.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#port DnsZone#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreams.property.tsigKeyId">tsigKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#tsig_key_id DnsZone#tsig_key_id}. |

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreams.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#address DnsZone#address}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreams.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#port DnsZone#port}.

---

##### `tsigKeyId`<sup>Optional</sup> <a name="tsigKeyId" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreams.property.tsigKeyId"></a>

```typescript
public readonly tsigKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#tsig_key_id DnsZone#tsig_key_id}.

---

### DnsZoneExternalMasters <a name="DnsZoneExternalMasters" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMasters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMasters.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

const dnsZoneExternalMasters: dnsZone.DnsZoneExternalMasters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMasters.property.address">address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#address DnsZone#address}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMasters.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#port DnsZone#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMasters.property.tsigKeyId">tsigKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#tsig_key_id DnsZone#tsig_key_id}. |

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMasters.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#address DnsZone#address}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMasters.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#port DnsZone#port}.

---

##### `tsigKeyId`<sup>Optional</sup> <a name="tsigKeyId" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMasters.property.tsigKeyId"></a>

```typescript
public readonly tsigKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#tsig_key_id DnsZone#tsig_key_id}.

---

### DnsZoneNameservers <a name="DnsZoneNameservers" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameservers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameservers.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

const dnsZoneNameservers: dnsZone.DnsZoneNameservers = { ... }
```


### DnsZoneTimeouts <a name="DnsZoneTimeouts" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeouts.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

const dnsZoneTimeouts: dnsZone.DnsZoneTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#create DnsZone#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#delete DnsZone#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#update DnsZone#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#create DnsZone#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#delete DnsZone#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dns_zone#update DnsZone#update}.

---

### DnsZoneZoneTransferServers <a name="DnsZoneZoneTransferServers" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServers.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

const dnsZoneZoneTransferServers: dnsZone.DnsZoneZoneTransferServers = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList <a name="DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

new dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList.get"></a>

```typescript
public get(index: number): DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference <a name="DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

new dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.digestType">digestType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.rdata">rdata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsData">DnsZoneDnssecConfigKskDnssecKeyVersionsDsData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `digestType`<sup>Required</sup> <a name="digestType" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.digestType"></a>

```typescript
public readonly digestType: string;
```

- *Type:* string

---

##### `rdata`<sup>Required</sup> <a name="rdata" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.rdata"></a>

```typescript
public readonly rdata: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DnsZoneDnssecConfigKskDnssecKeyVersionsDsData;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsData">DnsZoneDnssecConfigKskDnssecKeyVersionsDsData</a>

---


### DnsZoneDnssecConfigKskDnssecKeyVersionsList <a name="DnsZoneDnssecConfigKskDnssecKeyVersionsList" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

new dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList.get"></a>

```typescript
public get(index: number): DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference <a name="DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

new dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.dsData">dsData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList">DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.keyTag">keyTag</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.lengthInBytes">lengthInBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.predecessorDnssecKeyVersionUuid">predecessorDnssecKeyVersionUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.successorDnssecKeyVersionUuid">successorDnssecKeyVersionUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeActivated">timeActivated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeExpired">timeExpired</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeInactivated">timeInactivated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.timePromoted">timePromoted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.timePublished">timePublished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeUnpublished">timeUnpublished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersions">DnsZoneDnssecConfigKskDnssecKeyVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `dsData`<sup>Required</sup> <a name="dsData" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.dsData"></a>

```typescript
public readonly dsData: DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList">DnsZoneDnssecConfigKskDnssecKeyVersionsDsDataList</a>

---

##### `keyTag`<sup>Required</sup> <a name="keyTag" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.keyTag"></a>

```typescript
public readonly keyTag: number;
```

- *Type:* number

---

##### `lengthInBytes`<sup>Required</sup> <a name="lengthInBytes" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.lengthInBytes"></a>

```typescript
public readonly lengthInBytes: number;
```

- *Type:* number

---

##### `predecessorDnssecKeyVersionUuid`<sup>Required</sup> <a name="predecessorDnssecKeyVersionUuid" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.predecessorDnssecKeyVersionUuid"></a>

```typescript
public readonly predecessorDnssecKeyVersionUuid: string;
```

- *Type:* string

---

##### `successorDnssecKeyVersionUuid`<sup>Required</sup> <a name="successorDnssecKeyVersionUuid" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.successorDnssecKeyVersionUuid"></a>

```typescript
public readonly successorDnssecKeyVersionUuid: string;
```

- *Type:* string

---

##### `timeActivated`<sup>Required</sup> <a name="timeActivated" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeActivated"></a>

```typescript
public readonly timeActivated: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeExpired`<sup>Required</sup> <a name="timeExpired" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeExpired"></a>

```typescript
public readonly timeExpired: string;
```

- *Type:* string

---

##### `timeInactivated`<sup>Required</sup> <a name="timeInactivated" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeInactivated"></a>

```typescript
public readonly timeInactivated: string;
```

- *Type:* string

---

##### `timePromoted`<sup>Required</sup> <a name="timePromoted" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.timePromoted"></a>

```typescript
public readonly timePromoted: string;
```

- *Type:* string

---

##### `timePublished`<sup>Required</sup> <a name="timePublished" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.timePublished"></a>

```typescript
public readonly timePublished: string;
```

- *Type:* string

---

##### `timeUnpublished`<sup>Required</sup> <a name="timeUnpublished" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.timeUnpublished"></a>

```typescript
public readonly timeUnpublished: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DnsZoneDnssecConfigKskDnssecKeyVersions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersions">DnsZoneDnssecConfigKskDnssecKeyVersions</a>

---


### DnsZoneDnssecConfigList <a name="DnsZoneDnssecConfigList" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigList.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

new dnsZone.DnsZoneDnssecConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigList.get"></a>

```typescript
public get(index: number): DnsZoneDnssecConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DnsZoneDnssecConfigOutputReference <a name="DnsZoneDnssecConfigOutputReference" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

new dnsZone.DnsZoneDnssecConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.property.kskDnssecKeyVersions">kskDnssecKeyVersions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList">DnsZoneDnssecConfigKskDnssecKeyVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.property.zskDnssecKeyVersions">zskDnssecKeyVersions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList">DnsZoneDnssecConfigZskDnssecKeyVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfig">DnsZoneDnssecConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kskDnssecKeyVersions`<sup>Required</sup> <a name="kskDnssecKeyVersions" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.property.kskDnssecKeyVersions"></a>

```typescript
public readonly kskDnssecKeyVersions: DnsZoneDnssecConfigKskDnssecKeyVersionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigKskDnssecKeyVersionsList">DnsZoneDnssecConfigKskDnssecKeyVersionsList</a>

---

##### `zskDnssecKeyVersions`<sup>Required</sup> <a name="zskDnssecKeyVersions" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.property.zskDnssecKeyVersions"></a>

```typescript
public readonly zskDnssecKeyVersions: DnsZoneDnssecConfigZskDnssecKeyVersionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList">DnsZoneDnssecConfigZskDnssecKeyVersionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DnsZoneDnssecConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfig">DnsZoneDnssecConfig</a>

---


### DnsZoneDnssecConfigZskDnssecKeyVersionsList <a name="DnsZoneDnssecConfigZskDnssecKeyVersionsList" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

new dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList.get"></a>

```typescript
public get(index: number): DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference <a name="DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

new dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.keyTag">keyTag</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.lengthInBytes">lengthInBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.predecessorDnssecKeyVersionUuid">predecessorDnssecKeyVersionUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.successorDnssecKeyVersionUuid">successorDnssecKeyVersionUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeActivated">timeActivated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeExpired">timeExpired</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeInactivated">timeInactivated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.timePromoted">timePromoted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.timePublished">timePublished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeUnpublished">timeUnpublished</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersions">DnsZoneDnssecConfigZskDnssecKeyVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `keyTag`<sup>Required</sup> <a name="keyTag" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.keyTag"></a>

```typescript
public readonly keyTag: number;
```

- *Type:* number

---

##### `lengthInBytes`<sup>Required</sup> <a name="lengthInBytes" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.lengthInBytes"></a>

```typescript
public readonly lengthInBytes: number;
```

- *Type:* number

---

##### `predecessorDnssecKeyVersionUuid`<sup>Required</sup> <a name="predecessorDnssecKeyVersionUuid" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.predecessorDnssecKeyVersionUuid"></a>

```typescript
public readonly predecessorDnssecKeyVersionUuid: string;
```

- *Type:* string

---

##### `successorDnssecKeyVersionUuid`<sup>Required</sup> <a name="successorDnssecKeyVersionUuid" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.successorDnssecKeyVersionUuid"></a>

```typescript
public readonly successorDnssecKeyVersionUuid: string;
```

- *Type:* string

---

##### `timeActivated`<sup>Required</sup> <a name="timeActivated" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeActivated"></a>

```typescript
public readonly timeActivated: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeExpired`<sup>Required</sup> <a name="timeExpired" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeExpired"></a>

```typescript
public readonly timeExpired: string;
```

- *Type:* string

---

##### `timeInactivated`<sup>Required</sup> <a name="timeInactivated" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeInactivated"></a>

```typescript
public readonly timeInactivated: string;
```

- *Type:* string

---

##### `timePromoted`<sup>Required</sup> <a name="timePromoted" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.timePromoted"></a>

```typescript
public readonly timePromoted: string;
```

- *Type:* string

---

##### `timePublished`<sup>Required</sup> <a name="timePublished" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.timePublished"></a>

```typescript
public readonly timePublished: string;
```

- *Type:* string

---

##### `timeUnpublished`<sup>Required</sup> <a name="timeUnpublished" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.timeUnpublished"></a>

```typescript
public readonly timeUnpublished: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DnsZoneDnssecConfigZskDnssecKeyVersions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneDnssecConfigZskDnssecKeyVersions">DnsZoneDnssecConfigZskDnssecKeyVersions</a>

---


### DnsZoneExternalDownstreamsList <a name="DnsZoneExternalDownstreamsList" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

new dnsZone.DnsZoneExternalDownstreamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList.get"></a>

```typescript
public get(index: number): DnsZoneExternalDownstreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreams">DnsZoneExternalDownstreams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DnsZoneExternalDownstreams[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreams">DnsZoneExternalDownstreams</a>[]

---


### DnsZoneExternalDownstreamsOutputReference <a name="DnsZoneExternalDownstreamsOutputReference" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

new dnsZone.DnsZoneExternalDownstreamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.resetTsigKeyId">resetTsigKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetTsigKeyId` <a name="resetTsigKeyId" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.resetTsigKeyId"></a>

```typescript
public resetTsigKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.property.tsigKeyIdInput">tsigKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.property.tsigKeyId">tsigKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreams">DnsZoneExternalDownstreams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `tsigKeyIdInput`<sup>Optional</sup> <a name="tsigKeyIdInput" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.property.tsigKeyIdInput"></a>

```typescript
public readonly tsigKeyIdInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `tsigKeyId`<sup>Required</sup> <a name="tsigKeyId" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.property.tsigKeyId"></a>

```typescript
public readonly tsigKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DnsZoneExternalDownstreams;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalDownstreams">DnsZoneExternalDownstreams</a>

---


### DnsZoneExternalMastersList <a name="DnsZoneExternalMastersList" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

new dnsZone.DnsZoneExternalMastersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList.get"></a>

```typescript
public get(index: number): DnsZoneExternalMastersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMasters">DnsZoneExternalMasters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DnsZoneExternalMasters[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMasters">DnsZoneExternalMasters</a>[]

---


### DnsZoneExternalMastersOutputReference <a name="DnsZoneExternalMastersOutputReference" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

new dnsZone.DnsZoneExternalMastersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.resetTsigKeyId">resetTsigKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetTsigKeyId` <a name="resetTsigKeyId" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.resetTsigKeyId"></a>

```typescript
public resetTsigKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.property.tsigKeyIdInput">tsigKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.property.tsigKeyId">tsigKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMasters">DnsZoneExternalMasters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `tsigKeyIdInput`<sup>Optional</sup> <a name="tsigKeyIdInput" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.property.tsigKeyIdInput"></a>

```typescript
public readonly tsigKeyIdInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `tsigKeyId`<sup>Required</sup> <a name="tsigKeyId" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.property.tsigKeyId"></a>

```typescript
public readonly tsigKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMastersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DnsZoneExternalMasters;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneExternalMasters">DnsZoneExternalMasters</a>

---


### DnsZoneNameserversList <a name="DnsZoneNameserversList" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversList.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

new dnsZone.DnsZoneNameserversList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversList.get"></a>

```typescript
public get(index: number): DnsZoneNameserversOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DnsZoneNameserversOutputReference <a name="DnsZoneNameserversOutputReference" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

new dnsZone.DnsZoneNameserversOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameservers">DnsZoneNameservers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameserversOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DnsZoneNameservers;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneNameservers">DnsZoneNameservers</a>

---


### DnsZoneTimeoutsOutputReference <a name="DnsZoneTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

new dnsZone.DnsZoneTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeouts">DnsZoneTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DnsZoneTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneTimeouts">DnsZoneTimeouts</a>

---


### DnsZoneZoneTransferServersList <a name="DnsZoneZoneTransferServersList" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersList.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

new dnsZone.DnsZoneZoneTransferServersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersList.get"></a>

```typescript
public get(index: number): DnsZoneZoneTransferServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DnsZoneZoneTransferServersOutputReference <a name="DnsZoneZoneTransferServersOutputReference" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.Initializer"></a>

```typescript
import { dnsZone } from 'rhizo-co-terraform-provider-oci'

new dnsZone.DnsZoneZoneTransferServersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.property.isTransferDestination">isTransferDestination</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.property.isTransferSource">isTransferSource</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServers">DnsZoneZoneTransferServers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `isTransferDestination`<sup>Required</sup> <a name="isTransferDestination" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.property.isTransferDestination"></a>

```typescript
public readonly isTransferDestination: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isTransferSource`<sup>Required</sup> <a name="isTransferSource" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.property.isTransferSource"></a>

```typescript
public readonly isTransferSource: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DnsZoneZoneTransferServers;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dnsZone.DnsZoneZoneTransferServers">DnsZoneZoneTransferServers</a>

---



